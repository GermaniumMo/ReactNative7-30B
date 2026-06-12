# COMMENTARY — digitalschool

This file summarizes the main files in the `digitalschool` app and what was changed or annotated.

## App-level

- `App.js`: Root application component. Wrapped the app with `GestureHandlerRootView` and `SafeAreaProvider`, and mounted the `NavigationContainer` + `DrawerNavigator`. Line-by-line comments explain each provider and why it's needed (gesture handling, safe areas, navigation state).
- `index.js`: Registers the root component with the app registry; includes small comments explaining `registerRootComponent` usage.

## Navigation

- `navigation/StackNavigator.js`: Replaced legacy stack with `createNativeStackNavigator` and added `defaultScreenOptions`. Comments explain navigator nesting and why native stack is preferred for modern React Navigation.
- `navigation/TabNavigator.js`: Bottom tabs setup — `Home` renders the main stack, `About` renders directly. Tab options and `tabBarStyle` are annotated.
- `navigation/DrawerNavigator.js`: Drawer with entries for tabs and `About`. Comments explain `getParent()` usage for opening drawers from nested screens.

## Screens

- `screens/Home.js`: Converted to hooks and `useNavigation()`. Functions to navigate or open drawer use `useCallback` and are commented to explain parent/child navigation relationships.
- `screens/About.js`: Hook-based navigation and memoized navigation handlers; commented for clarity.

## Components (annotated line-by-line)

- `components/ProfileInfo.js`: Presentational profile card. Each import, JSX element and style property has been explained with inline comments to help learners understand layout and style choices.
- `components/Projects.js`: Horizontal `FlatList` of project thumbnails. `projectImages` array items and FlatList props (`horizontal`, `nestedScrollEnabled`, etc.) are documented inline.
- `components/StudentDetails.js`: Compact student card (image + text). Props (`image`, `name`, `description`) and each part of the layout are commented.

## How to run (quick)

1. Install dependencies (inside `digitalschool`):

```bash
cd digitalschool
npm install
```

2. Start the Expo dev server:

```bash
npm start
```

3. Open the project in Expo Go or an emulator.

---

If you want, I can also generate a short `docs/` folder with per-file expanded explanations or run the app and share a short inspection log. Let me know which you prefer next.
