# Thamani Android Architecture

You are the architecture guardian for Thamani's Android application. Every piece of code you
write or review follows the patterns in this document. The architecture exists for one reason:
**clarity**. As the app grows, navigating and finding things should remain effortless. The
guiding principle is SRP (Single Responsibility Principle) — every class, interface, and module
does exactly one thing.

## Module Dependency Graph

The app has 5 core modules with a strict dependency flow. Any new module derives from these.

```
Application
    |
    v
User Interface (presentation)
    |
    v
  Domain (optional)
    |
    v
   Data
   / \
  v   v
Local   Network
Datasource  Datasource
```

Dependencies flow **downward only**. A module never depends on something above it. The Data
module depends on both datasource modules. The UI module depends on Data and optionally Domain.
Application depends only on UI's presentation sub-module.

## Module Breakdown

### 1. Local Datasource

**Responsibility:** Getting or storing data on the device. Nothing else.

**Depends on:** Nothing

**Key rules:**
- Library-specific models (Room entities, etc.) are `internal` — never leak implementation details
- Every function returns a `Flow` or `LocalResult` to handle failures gracefully without crashing
- Use functional interfaces (`fun interface`) for single-action datasources

**Naming:** `{Verb}{Domain}{Module}Datasource` — e.g., `GetAccountsLocalDataSource`

```kotlin
// Entity is internal — implementation detail of the storage library
internal data class AccountEntity(
    val id: Uuid,
    val name: String,
)

// Cache model is the public contract
data class AccountCache(
    val id: String,
    val name: String,
)

// Encapsulates all CRUD operations for accounts
interface AccountLocalDataSource {
    val getAccounts: GetAccountsLocalDataSource
    val getAccount: GetAccountLocalDataSource
}

// Each action is its own functional interface
fun interface GetAccountsLocalDataSource {
    suspend operator fun invoke(): LocalResult<List<AccountCache>>
}

fun interface GetAccountLocalDataSource {
    suspend operator fun invoke(): LocalResult<AccountCache>
}
```

### 2. Network Datasource

**Responsibility:** Getting data from a server. Nothing else.

**Depends on:** Nothing

**Key rules:**
- DTOs use `@Serializable` and are the public contract for network data
- Every function returns a `Flow` or `NetworkResult`
- Same functional interface pattern as local datasources

**Naming:** `{Verb}{Domain}{Module}Datasource` — e.g., `GetAccountsNetworkDataSource`

```kotlin
@Serializable
data class AccountDTO(
    val id: String,
    val name: String,
)

interface AccountNetworkDataSource {
    val getAccounts: GetAccountsNetworkDataSource
}

fun interface GetAccountsNetworkDataSource {
    suspend operator fun invoke(): NetworkResult<List<AccountDTO>>
}
```

### 3. Data (Repository Layer)

**Responsibility:** Encapsulating data from both device and server, exposing it to other modules.

**Depends on:** `local-datasource`, `network-datasource`

**Key rules:**
- This is the most critical layer — think carefully about caching strategy before writing code
- Domain models live here (not in datasources, not in UI)
- Repository interfaces are public, implementations are `internal`
- Each repository action gets its own functional interface implementation
- Caching strategy is explicit — never implicit or accidental

**Caching strategies available:**
```kotlin
sealed interface CachingStrategy {
    object None : CachingStrategy
    object LocalOnly : CachingStrategy
    object NetworkOnly : CachingStrategy
    object LocalFirst : CachingStrategy
    object NetworkFirst : CachingStrategy
}
```

**Full repository pattern:**
```kotlin
// Domain model — the shared language between layers
data class AccountDomain(
    val id: String,
    val name: String,
)

// Public interface
interface AccountsRepository {
    val getAccounts: GetAccountsRepository
}

// Internal implementation wires up the interface
internal class AccountsRepositoryImpl(
    override val getAccounts: GetAccountsRepository,
) : AccountsRepository

// Each action is a functional interface
fun interface GetAccountsRepository {
    suspend operator fun invoke(): List<AccountDomain>
}

// Internal implementation handles caching logic
internal class GetAccountsRepositoryImpl(
    private val strategy: CachingStrategy,
    private val accountNetworkDataSource: AccountNetworkDataSource,
    private val accountLocalDataSource: AccountLocalDataSource,
) : GetAccountsRepository {
    override suspend fun invoke(): List<AccountDomain> {
        val network = accountNetworkDataSource.getAccounts()
        val local = accountLocalDataSource.getAccounts()
        // Apply caching strategy and return
        return listOf()
    }
}
```

### 4. Domain (Optional)

**Responsibility:** Aggregating data from more than two data points.

**Depends on:** `data`

**Key rules:**
- Only for **retrieving** data — never for saving or updating
- Only introduce this layer when you genuinely need to combine multiple repositories
- If you're just passing through a single repository, skip this layer

### 5. User Interface

**Responsibility:** Everything UI — components, services, containers, and presenters.

**Depends on:** `data`, `domain`

This module has its own internal architecture and sub-modules. See sections below.

## UI Architecture

The UI layer splits into two complementary roles:

### UI-Container (State Holder / ViewModel)

Stores and manages UI state. This is where data transforms into what the screen needs.

**Key rules:**
- UI models and ViewModels are `internal` — screens expose only the route
- State uses a sealed `UiState` wrapper for loading/error/success states
- UI models can have computed properties (like `label`) for display logic

```kotlin
internal data class Account(
    val id: String,
    val name: String,
) {
    val label: String
        get() = name.lowercase().replaceFirstChar { it.uppercase() }
}

sealed interface UiState<out T> {
    object Initial : UiState<Nothing>
    object Loading : UiState<Nothing>
    data class Error(val message: String) : UiState<Nothing>
    data class Success<T>(val data: T) : UiState<T>
}

internal data class AccountsUiState(
    val listState: UiState<List<Account>> = UiState.Initial
)

internal class AccountsViewModel(
    val accountsRepository: AccountsRepository,
) {
    suspend fun getAccounts() {
        accountsRepository.getAccounts()
    }
}
```

### UI-Presenter (Composable Layer)

Displays state and receives user actions for processing.

**Key rules:**
- The **only** public thing is the Route composable
- The Screen composable injects the ViewModel
- Content composables are stateless — they receive state and emit actions

```kotlin
// PUBLIC — the navigation entry point
@Composable
fun AccountRoute(
    navigateToAccount: (id: String) -> Unit = {}
) {
    // ...
}

// INTERNAL — injects ViewModel
@Composable
internal fun AccountScreen(viewModel: AccountsViewModel) {
    // ...
}

// INTERNAL — pure state-to-UI mapping
@Composable
internal fun AccountScreenContent(
    state: AccountsUiState,
    onAction: (AccountsUiAction) -> Unit
) {
    // ...
}
```

### UI Component Hierarchy

Presenters follow a strict decomposition from broad to specific:

```
Screen > View > Section > Component > Item
```

**Example:**
```
DashboardScreen >
  DashboardView (optional) >
    DashboardViewTotalsSection >
      DashboardTotalsComponent >
        DashboardTotalItem
```

**Rule:** Only a Screen or View can hold a ViewModel. Everything below receives state as parameters.

## UI Sub-Modules

The `user-interface` module contains these sub-modules:

| Sub-Module | Responsibility |
|---|---|
| **Presentation** | Packs all dependencies and initializations, provides them to the app module |
| **Features** | Independent features — only the route and module are publicly visible |
| **Design** | The design system, consumed by feature modules and presentation |
| **Common** | Shared design components and UI helpers across feature modules |
| **Resources** | Common resources shared between feature modules and application |

### Application Module

**Responsibility:** Creating the application.

**Depends on:** `user-interface:presentation` only

## Quick Decision Guide

When you're writing code, ask yourself:

| Question | Answer |
|---|---|
| Where does my API call go? | `network-datasource` as a `fun interface` returning `NetworkResult` |
| Where does my Room/SQLite query go? | `local-datasource` as a `fun interface` returning `LocalResult` |
| Where do I combine network + local? | `data` module in a Repository implementation with explicit `CachingStrategy` |
| Where do I combine multiple repositories? | `domain` module (only if truly needed) |
| Where does my ViewModel go? | `user-interface` in the feature's container layer, marked `internal` |
| Where does my Composable go? | `user-interface` in the feature's presenter layer |
| What's the only public UI thing? | The `Route` composable |
| Should my entity/DTO be public? | Entities: **no** (`internal`). DTOs: **yes** (`@Serializable`). Domain models: **yes**. |
| What naming for a datasource? | `{Verb}{Domain}{Module}Datasource` |

## Architecture Violations to Watch For

These break the architecture — flag them immediately:

1. **Leaking library types** — Room entities, Retrofit interfaces, or Ktor models exposed outside their datasource module
2. **Skipping the repository** — UI directly calling a datasource
3. **Public ViewModels or UI models** — Everything in the UI container/presenter is `internal` except the Route
4. **Manual transactions** — If users are typing transactions, the product has failed (this connects to Thamani's "Zero Manual Labor" product rule)
5. **Domain layer doing writes** — Domain is read-only aggregation
6. **Implicit caching** — Every caching decision must use an explicit `CachingStrategy`
7. **Fat composables** — A composable that holds a ViewModel and also renders complex UI. Split into Screen (ViewModel) and Content (stateless)

For detailed code examples beyond what's in this document, see `architecture-examples.md` (in the same references directory).
