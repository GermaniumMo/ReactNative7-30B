# digitalschool

This is a small React Native / Expo example app added to the workspace.

Prerequisites:

- Node.js (LTS) and `npm` installed on your machine.
- Expo CLI (optional but recommended): `npm install -g expo-cli` or use `npx expo`.

Quick start:

1. Open a terminal and change to the project folder:

```bash
cd digitalschool
```

2. Install project dependencies listed in `package.json`:

```bash
npm install
```

3. Start the Expo dev server:

```bash
npm start
# or
npx expo start
```

Notes and additional setup:

- The project copies assets into `digitalschool/assets` so image imports are local. If you prefer to reuse the original assets folder, update the import paths accordingly.
- The app entry is `index.js` → `App.js`. `App.js` wraps the navigation in `GestureHandlerRootView` and `SafeAreaProvider`, and uses a Drawer navigator that contains a Bottom Tab navigator and stack(s).

Git / Push instructions (if you want to push these changes):

1. Ensure the repository has a remote configured (e.g. `origin`) and you have push access.
2. Stage and commit the changes, for example:

```bash
git add digitalschool
git commit -m "Add digitalschool app with navigation and inline comments"
git push origin HEAD
```

If `git push` fails, ensure you have authentication set up (SSH key or credential manager) or add a remote URL first.

If you want me to push the changes to the repo now, I can attempt to commit and push from this environment; if the remote requires authentication I will report the exact error so you can provide credentials locally.

Packaging / Install commands (copy these into your README if desired):

npx create-expo-app app-name --template
npx expo install react-native-web react-dom @expo/metro-runtime
npm i -g @expo/ngrok
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-native-masked-view/masked-view react-native-reanimated react-native-worklets
npm install @expo/ngrok
npx expo start --tunnel
npm install expo@^54.0.0 
npx expo install --fix 
npx expo-doctor
# if duplicated dependencies
npm why react-native 
npm dedupe 
npx expo-doctor
