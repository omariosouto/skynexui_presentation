## UI Dream
- https://docs.google.com/presentation/d/1U_y0pzbAkTQyWnYcFURIcRgDw9pEViw0mUsCS5E5XS4/edit#slide=id.gf0278318d2_0_160
- Themable and configurable
    - https://skynexui.dev/theme/generator/


## Problems with Flutter Web:
- Breaking Changes
- Not easy to make Responsive for multi screens
    - https://docs.flutter.dev/development/ui/layout/building-adaptive-apps#use-layoutbuilder-for-extra-flexibility
- Flutter web doesn't follow web specs for performance
    - Some tricky things related to A11y
    - Doesn't have hover by default? 
    - https://openpokedex.com/
- Kind trick for local development (On M1 MacBook works well)

## React
- https://nextjs.org/docs/advanced-features/measuring-performance

## Proposal
- UI in flutter and in React are "equal but different"
    - Web uses Box Model with CSS Styles
    - Flutter uses Widget based responsibility with Smart Props

```dart
const Card(
  child: Padding(
    padding: EdgeInsets.all(16.0),
    child: Text('Hello World!'),
  ),
)
``` 
- Same "DSL" written in Dart/Flutter and JavaScript/React and transpile Dart to JavaScript using ANTLR 
    - https://www.antlr.org/
    - If we target Babel, the JavaScript side is "DONE"
        - https://babeljs.io/docs/en/babel-generator

- Width 

## Future
- Maybe we could target even **Apple Smart Watch** or **Instant apps** in Kotlin...
    - https://developer.android.com/topic/google-play-instant/getting-started/instant-enabled-app-bundle
    - https://developer.apple.com/xcode/swiftui/#:~:text=SwiftUI%20helps%20you%20build%20great,set%20of%20tools%20and%20APIs.
