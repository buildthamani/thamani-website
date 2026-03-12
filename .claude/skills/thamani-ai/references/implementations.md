# Thamani Theme — Platform Implementations

## Table of Contents
1. [Jetpack Compose (Android)](#jetpack-compose)
2. [CSS Custom Properties (Web)](#css-custom-properties)
3. [Tailwind CSS Config (Web)](#tailwind-css-config)
4. [SwiftUI (iOS)](#swiftui)

---

## Jetpack Compose

### Colors

```kotlin
package com.thamani.design.theme

import androidx.compose.ui.graphics.Color

// Core brand (from logo)
val ThamaniDeepBlue = Color(0xFF0050FF)
val ThamaniBlue = Color(0xFF0095FE)
val ThamaniCyan = Color(0xFF05D3FF)

// Extended primary scale
val Primary900 = Color(0xFF001A66)
val Primary800 = Color(0xFF002E99)
val Primary700 = Color(0xFF0042CC)
val Primary600 = Color(0xFF0050FF)
val Primary500 = Color(0xFF0073FE)
val Primary400 = Color(0xFF0095FE)
val Primary300 = Color(0xFF38B4FF)
val Primary200 = Color(0xFF7DD1FF)
val Primary100 = Color(0xFFB8E6FF)
val Primary50 = Color(0xFFE6F6FF)

// Semantic
val Success = Color(0xFF00C853)
val SuccessLight = Color(0xFFE8F9EF)
val Warning = Color(0xFFFFB300)
val WarningLight = Color(0xFFFFF8E1)
val Error = Color(0xFFFF3B30)
val ErrorLight = Color(0xFFFFEBEE)

// Neutrals
val Neutral950 = Color(0xFF0A0E14)
val Neutral900 = Color(0xFF111827)
val Neutral800 = Color(0xFF1F2937)
val Neutral700 = Color(0xFF374151)
val Neutral600 = Color(0xFF4B5563)
val Neutral500 = Color(0xFF6B7280)
val Neutral400 = Color(0xFF9CA3AF)
val Neutral300 = Color(0xFFD1D5DB)
val Neutral200 = Color(0xFFE5E7EB)
val Neutral100 = Color(0xFFF3F4F6)
val Neutral50 = Color(0xFFF9FAFB)

// Dark mode adjusted
val DarkPrimaryDeep = Color(0xFF3878FF)
val DarkPrimary = Color(0xFF4DA6FF)
val DarkPrimaryBright = Color(0xFF33DDFF)
val DarkSuccess = Color(0xFF4ADE80)
val DarkWarning = Color(0xFFFBBF24)
val DarkError = Color(0xFFFF6B6B)

// Shield levels
val ShieldWood = Color(0xFF8B6914)
val ShieldWoodLight = Color(0xFFC49A2A)
val ShieldBronze = Color(0xFFCD7F32)
val ShieldBronzeLight = Color(0xFFE8A849)
val ShieldSilver = Color(0xFF9CA3AF)
val ShieldSilverLight = Color(0xFFD1D5DB)
val ShieldGold = Color(0xFFFFB300)
val ShieldGoldLight = Color(0xFFFFD54F)
```

### Material3 Color Scheme

```kotlin
package com.thamani.design.theme

import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme

val ThamaniLightColorScheme = lightColorScheme(
    primary = ThamaniBlue,
    onPrimary = Color.White,
    primaryContainer = Primary100,
    onPrimaryContainer = Primary900,
    secondary = ThamaniCyan,
    onSecondary = Neutral900,
    secondaryContainer = Primary50,
    onSecondaryContainer = Primary800,
    tertiary = ThamaniDeepBlue,
    onTertiary = Color.White,
    background = Neutral50,
    onBackground = Neutral950,
    surface = Color.White,
    onSurface = Neutral900,
    surfaceVariant = Neutral100,
    onSurfaceVariant = Neutral700,
    outline = Neutral400,
    outlineVariant = Neutral200,
    error = Error,
    onError = Color.White,
    errorContainer = ErrorLight,
    onErrorContainer = Color(0xFF7F0000),
)

val ThamaniDarkColorScheme = darkColorScheme(
    primary = DarkPrimary,
    onPrimary = Primary900,
    primaryContainer = Primary800,
    onPrimaryContainer = Primary100,
    secondary = DarkPrimaryBright,
    onSecondary = Primary900,
    secondaryContainer = Primary700,
    onSecondaryContainer = Primary100,
    tertiary = DarkPrimaryDeep,
    onTertiary = Color.White,
    background = Neutral950,
    onBackground = Color.White,
    surface = Neutral900,
    onSurface = Neutral100,
    surfaceVariant = Neutral800,
    onSurfaceVariant = Neutral300,
    outline = Neutral600,
    outlineVariant = Neutral700,
    error = DarkError,
    onError = Color(0xFF7F0000),
    errorContainer = Color(0xFF3D0000),
    onErrorContainer = ErrorLight,
)
```

### Typography

```kotlin
package com.thamani.design.theme

import androidx.compose.material3.Typography
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

val GeistFontFamily = FontFamily(
    Font(R.font.geist_regular, FontWeight.Normal),
    Font(R.font.geist_medium, FontWeight.Medium),
    Font(R.font.geist_semibold, FontWeight.SemiBold),
    Font(R.font.geist_bold, FontWeight.Bold),
)

val GeistMonoFontFamily = FontFamily(
    Font(R.font.geist_mono_regular, FontWeight.Normal),
    Font(R.font.geist_mono_medium, FontWeight.Medium),
)

val ThamaniTypography = Typography(
    displayLarge = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 32.sp,
        lineHeight = 40.sp,
    ),
    displayMedium = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 28.sp,
        lineHeight = 36.sp,
    ),
    headlineLarge = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.SemiBold,
        fontSize = 24.sp,
        lineHeight = 32.sp,
    ),
    headlineMedium = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.SemiBold,
        fontSize = 20.sp,
        lineHeight = 28.sp,
    ),
    headlineSmall = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.SemiBold,
        fontSize = 16.sp,
        lineHeight = 24.sp,
    ),
    bodyLarge = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        lineHeight = 24.sp,
    ),
    bodyMedium = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        lineHeight = 20.sp,
    ),
    bodySmall = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Normal,
        fontSize = 12.sp,
        lineHeight = 16.sp,
    ),
    labelLarge = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Medium,
        fontSize = 14.sp,
        lineHeight = 20.sp,
    ),
    labelMedium = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Medium,
        fontSize = 12.sp,
        lineHeight = 16.sp,
    ),
    labelSmall = TextStyle(
        fontFamily = GeistFontFamily,
        fontWeight = FontWeight.Medium,
        fontSize = 10.sp,
        lineHeight = 14.sp,
    ),
)

// Money amount style — always use Geist Mono for aligned digits
val ThamaniMonoStyle = TextStyle(
    fontFamily = GeistMonoFontFamily,
    fontWeight = FontWeight.Medium,
    fontSize = 14.sp,
    lineHeight = 20.sp,
)
```

### Gradients

```kotlin
package com.thamani.design.theme

import androidx.compose.ui.graphics.Brush

object ThamaniGradients {
    val brand = Brush.linearGradient(
        colors = listOf(ThamaniDeepBlue, ThamaniBlue, ThamaniCyan),
    )
    val primary = Brush.linearGradient(
        colors = listOf(ThamaniDeepBlue, ThamaniBlue),
    )
    val accent = Brush.linearGradient(
        colors = listOf(ThamaniBlue, ThamaniCyan),
    )
    val subtle = Brush.linearGradient(
        colors = listOf(Primary50, Color.White),
    )
}
```

### Theme Composable

```kotlin
package com.thamani.design.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable

@Composable
fun ThamaniTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colorScheme = if (darkTheme) ThamaniDarkColorScheme else ThamaniLightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = ThamaniTypography,
        content = content,
    )
}
```

### Spacing & Radius

```kotlin
package com.thamani.design.theme

import androidx.compose.ui.unit.dp

object ThamaniSpacing {
    val xxs = 4.dp
    val xs = 8.dp
    val sm = 12.dp
    val md = 16.dp
    val lg = 20.dp
    val xl = 24.dp
    val xxl = 32.dp
    val xxxl = 40.dp
    val huge = 48.dp
    val massive = 64.dp
}

object ThamaniRadius {
    val sm = 6.dp
    val md = 12.dp
    val lg = 16.dp
    val xl = 24.dp
    val full = 9999.dp
}
```

---

## CSS Custom Properties

```css
:root {
  /* Core brand */
  --thamani-primary-deep: #0050FF;
  --thamani-primary: #0095FE;
  --thamani-primary-bright: #05D3FF;

  /* Extended primary */
  --thamani-primary-900: #001A66;
  --thamani-primary-800: #002E99;
  --thamani-primary-700: #0042CC;
  --thamani-primary-600: #0050FF;
  --thamani-primary-500: #0073FE;
  --thamani-primary-400: #0095FE;
  --thamani-primary-300: #38B4FF;
  --thamani-primary-200: #7DD1FF;
  --thamani-primary-100: #B8E6FF;
  --thamani-primary-50: #E6F6FF;

  /* Semantic */
  --thamani-success: #00C853;
  --thamani-success-light: #E8F9EF;
  --thamani-warning: #FFB300;
  --thamani-warning-light: #FFF8E1;
  --thamani-error: #FF3B30;
  --thamani-error-light: #FFEBEE;

  /* Neutrals */
  --thamani-neutral-950: #0A0E14;
  --thamani-neutral-900: #111827;
  --thamani-neutral-800: #1F2937;
  --thamani-neutral-700: #374151;
  --thamani-neutral-600: #4B5563;
  --thamani-neutral-500: #6B7280;
  --thamani-neutral-400: #9CA3AF;
  --thamani-neutral-300: #D1D5DB;
  --thamani-neutral-200: #E5E7EB;
  --thamani-neutral-100: #F3F4F6;
  --thamani-neutral-50: #F9FAFB;

  /* Gradients */
  --thamani-gradient-brand: linear-gradient(135deg, #0050FF, #0095FE, #05D3FF);
  --thamani-gradient-primary: linear-gradient(135deg, #0050FF, #0095FE);
  --thamani-gradient-accent: linear-gradient(135deg, #0095FE, #05D3FF);
  --thamani-gradient-subtle: linear-gradient(135deg, #E6F6FF, #FFFFFF);

  /* Spacing */
  --thamani-space-1: 4px;
  --thamani-space-2: 8px;
  --thamani-space-3: 12px;
  --thamani-space-4: 16px;
  --thamani-space-5: 20px;
  --thamani-space-6: 24px;
  --thamani-space-8: 32px;
  --thamani-space-10: 40px;
  --thamani-space-12: 48px;
  --thamani-space-16: 64px;

  /* Radius */
  --thamani-radius-sm: 6px;
  --thamani-radius-md: 12px;
  --thamani-radius-lg: 16px;
  --thamani-radius-xl: 24px;
  --thamani-radius-full: 9999px;

  /* Shadows */
  --thamani-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --thamani-shadow-md: 0 4px 6px -1px rgba(0,0,0,0.08);
  --thamani-shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
  --thamani-shadow-glow: 0 0 20px rgba(0,149,254,0.25);

  /* Typography */
  --thamani-font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --thamani-font-mono: 'Geist Mono', ui-monospace, 'SFMono-Regular', monospace;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --thamani-primary-deep: #3878FF;
    --thamani-primary: #4DA6FF;
    --thamani-primary-bright: #33DDFF;
    --thamani-success: #4ADE80;
    --thamani-warning: #FBBF24;
    --thamani-error: #FF6B6B;
    --thamani-neutral-950: #FFFFFF;
    --thamani-neutral-900: #F3F4F6;
    --thamani-neutral-50: #0A0E14;
    --thamani-neutral-100: #111827;
  }
}
```

---

## Tailwind CSS Config

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        thamani: {
          deep: '#0050FF',
          DEFAULT: '#0095FE',
          bright: '#05D3FF',
          50: '#E6F6FF',
          100: '#B8E6FF',
          200: '#7DD1FF',
          300: '#38B4FF',
          400: '#0095FE',
          500: '#0073FE',
          600: '#0050FF',
          700: '#0042CC',
          800: '#002E99',
          900: '#001A66',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        'thamani-sm': '6px',
        'thamani-md': '12px',
        'thamani-lg': '16px',
        'thamani-xl': '24px',
      },
      backgroundImage: {
        'thamani-brand': 'linear-gradient(135deg, #0050FF, #0095FE, #05D3FF)',
        'thamani-primary': 'linear-gradient(135deg, #0050FF, #0095FE)',
        'thamani-accent': 'linear-gradient(135deg, #0095FE, #05D3FF)',
        'thamani-subtle': 'linear-gradient(135deg, #E6F6FF, #FFFFFF)',
      },
      boxShadow: {
        'thamani-sm': '0 1px 2px rgba(0,0,0,0.05)',
        'thamani-md': '0 4px 6px -1px rgba(0,0,0,0.08)',
        'thamani-lg': '0 10px 15px -3px rgba(0,0,0,0.1)',
        'thamani-glow': '0 0 20px rgba(0,149,254,0.25)',
      },
    },
  },
}
```

---

## SwiftUI

```swift
import SwiftUI

extension Color {
    // Core brand
    static let thamaniDeep = Color(hex: 0x0050FF)
    static let thamaniPrimary = Color(hex: 0x0095FE)
    static let thamaniBright = Color(hex: 0x05D3FF)

    // Semantic
    static let thamaniSuccess = Color(hex: 0x00C853)
    static let thamaniWarning = Color(hex: 0xFFB300)
    static let thamaniError = Color(hex: 0xFF3B30)
}

extension LinearGradient {
    static let thamaniBrand = LinearGradient(
        colors: [.thamaniDeep, .thamaniPrimary, .thamaniBright],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    static let thamaniPrimaryGradient = LinearGradient(
        colors: [.thamaniDeep, .thamaniPrimary],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    static let thamaniAccent = LinearGradient(
        colors: [.thamaniPrimary, .thamaniBright],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
}

// Hex initializer
extension Color {
    init(hex: UInt, alpha: Double = 1) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xff) / 255,
            green: Double((hex >> 08) & 0xff) / 255,
            blue: Double((hex >> 00) & 0xff) / 255,
            opacity: alpha
        )
    }
}
```
