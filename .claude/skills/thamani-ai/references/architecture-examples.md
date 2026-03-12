# Extended Architecture Examples

## Table of Contents
1. [Full Feature Scaffold](#full-feature-scaffold)
2. [Caching Strategy Implementation](#caching-strategy-implementation)
3. [UiState Patterns](#uistate-patterns)
4. [Action Pattern for Composables](#action-pattern-for-composables)
5. [Module Dependency Injection](#module-dependency-injection)

---

## Full Feature Scaffold

When adding a new feature (e.g., "Transactions"), create these files in order:

### 1. Network Datasource
```kotlin
// network-datasource/transaction/

@Serializable
data class TransactionDTO(
    val id: String,
    val amount: Double,
    val category: String,
    val timestamp: Long,
)

interface TransactionNetworkDataSource {
    val getTransactions: GetTransactionsNetworkDataSource
}

fun interface GetTransactionsNetworkDataSource {
    suspend operator fun invoke(): NetworkResult<List<TransactionDTO>>
}
```

### 2. Local Datasource
```kotlin
// local-datasource/transaction/

internal data class TransactionEntity(
    val id: String,
    val amount: Double,
    val category: String,
    val timestamp: Long,
)

data class TransactionCache(
    val id: String,
    val amount: Double,
    val category: String,
    val timestamp: Long,
)

interface TransactionLocalDataSource {
    val getTransactions: GetTransactionsLocalDataSource
    val saveTransactions: SaveTransactionsLocalDataSource
}

fun interface GetTransactionsLocalDataSource {
    suspend operator fun invoke(): LocalResult<List<TransactionCache>>
}

fun interface SaveTransactionsLocalDataSource {
    suspend operator fun invoke(transactions: List<TransactionCache>): LocalResult<Unit>
}
```

### 3. Data / Repository
```kotlin
// data/transaction/

data class TransactionDomain(
    val id: String,
    val amount: Double,
    val category: String,
    val timestamp: Long,
)

interface TransactionsRepository {
    val getTransactions: GetTransactionsRepository
}

internal class TransactionsRepositoryImpl(
    override val getTransactions: GetTransactionsRepository,
) : TransactionsRepository

fun interface GetTransactionsRepository {
    suspend operator fun invoke(): List<TransactionDomain>
}

internal class GetTransactionsRepositoryImpl(
    private val strategy: CachingStrategy,
    private val network: TransactionNetworkDataSource,
    private val local: TransactionLocalDataSource,
) : GetTransactionsRepository {
    override suspend fun invoke(): List<TransactionDomain> {
        return when (strategy) {
            is CachingStrategy.LocalFirst -> {
                val cached = local.getTransactions()
                if (cached is LocalResult.Success && cached.data.isNotEmpty()) {
                    cached.data.map { it.toDomain() }
                } else {
                    val remote = network.getTransactions()
                    when (remote) {
                        is NetworkResult.Success -> {
                            val cacheModels = remote.data.map { it.toCache() }
                            local.saveTransactions(cacheModels)
                            remote.data.map { it.toDomain() }
                        }
                        is NetworkResult.Error -> emptyList()
                    }
                }
            }
            // handle other strategies...
            else -> emptyList()
        }
    }
}
```

### 4. UI Container (ViewModel)
```kotlin
// user-interface/features/transaction/

internal data class Transaction(
    val id: String,
    val amount: String,       // formatted for display
    val category: String,
    val date: String,         // formatted for display
)

internal data class TransactionsUiState(
    val listState: UiState<List<Transaction>> = UiState.Initial,
)

internal sealed interface TransactionsUiAction {
    data class SelectTransaction(val id: String) : TransactionsUiAction
    object Refresh : TransactionsUiAction
}

internal class TransactionsViewModel(
    private val transactionsRepository: TransactionsRepository,
) {
    private val _state = MutableStateFlow(TransactionsUiState())
    val state: StateFlow<TransactionsUiState> = _state.asStateFlow()

    suspend fun getTransactions() {
        _state.update { it.copy(listState = UiState.Loading) }
        try {
            val transactions = transactionsRepository.getTransactions()
            _state.update {
                it.copy(listState = UiState.Success(transactions.map { t -> t.toUi() }))
            }
        } catch (e: Exception) {
            _state.update { it.copy(listState = UiState.Error(e.message ?: "Unknown error")) }
        }
    }
}
```

### 5. UI Presenter (Composables)
```kotlin
// user-interface/features/transaction/

// PUBLIC — only this is visible outside the feature
@Composable
fun TransactionsRoute(
    navigateToTransaction: (id: String) -> Unit = {},
) {
    // inject ViewModel here
}

@Composable
internal fun TransactionsScreen(viewModel: TransactionsViewModel) {
    val state by viewModel.state.collectAsStateWithLifecycle()
    TransactionsScreenContent(
        state = state,
        onAction = { action ->
            when (action) {
                is TransactionsUiAction.SelectTransaction ->
                    // navigate
                is TransactionsUiAction.Refresh ->
                    // refresh
            }
        }
    )
}

@Composable
internal fun TransactionsScreenContent(
    state: TransactionsUiState,
    onAction: (TransactionsUiAction) -> Unit,
) {
    // Stateless UI rendering
}
```

---

## Caching Strategy Implementation

When implementing caching, be explicit about *why* you chose a strategy:

| Strategy | When to use |
|---|---|
| `None` | Data is ephemeral, always fresh (e.g., OTP verification) |
| `LocalOnly` | Offline-first data that never comes from network (e.g., user preferences) |
| `NetworkOnly` | Always needs latest (e.g., real-time balance) |
| `LocalFirst` | Show cached data immediately, refresh in background (e.g., transaction history) |
| `NetworkFirst` | Try network, fall back to cache (e.g., exchange rates) |

---

## UiState Patterns

```kotlin
// Rendering pattern in Composable
when (val listState = state.listState) {
    is UiState.Initial -> { /* show nothing or placeholder */ }
    is UiState.Loading -> { /* show shimmer or spinner */ }
    is UiState.Error -> { /* show error with retry */ }
    is UiState.Success -> {
        // render listState.data
    }
}
```

---

## Action Pattern for Composables

Use sealed interfaces for UI actions to keep event handling type-safe:

```kotlin
internal sealed interface DashboardUiAction {
    object RefreshBalance : DashboardUiAction
    data class SelectCategory(val category: String) : DashboardUiAction
    data class TogglePrivacyMask(val enabled: Boolean) : DashboardUiAction
}

// In content composable
@Composable
internal fun DashboardContent(
    state: DashboardUiState,
    onAction: (DashboardUiAction) -> Unit,
) {
    Button(onClick = { onAction(DashboardUiAction.RefreshBalance) }) {
        Text("Refresh")
    }
}
```

---

## Module Dependency Injection

Each feature module provides its own DI configuration. The presentation sub-module
aggregates them all for the application module.

```kotlin
// features/transaction/di/
internal val transactionModule = module {
    single<TransactionsRepository> {
        TransactionsRepositoryImpl(
            getTransactions = GetTransactionsRepositoryImpl(
                strategy = CachingStrategy.LocalFirst,
                network = get(),
                local = get(),
            )
        )
    }
    viewModel { TransactionsViewModel(get()) }
}
```
