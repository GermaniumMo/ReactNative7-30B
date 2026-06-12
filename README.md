# ReactNative7-30B
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

# standard metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
module.exports = getDefaultConfig(__dirname);

## Pre-commit hook

This repository includes a lightweight pre-commit hook that validates staged files to help prevent accidentally committing large or ignored files (for example, `node_modules`).

- Hook location: `.githooks/pre-commit`
- Validator script: `digitalschool/scripts/validate_staged.js`

What it checks:
- Detects staged paths containing `node_modules` and aborts the commit.
- Fails the commit if any staged file is larger than 5 MB.

How to run the validator manually:

```bash
# From the repository root
node digitalschool/scripts/validate_staged.js
```

Enable hooks for a fresh clone:

```bash
# Run once after cloning to enable the bundled hooks
git config core.hooksPath .githooks
```

Notes:
- The hook requires Node.js to run. If Node is not available the hook will stop the commit.
- To bypass temporarily (not recommended), you can disable hooks locally with:

```bash
# Restore default hooks path (or set to your preferred hooks directory)
git config core.hooksPath $(git rev-parse --git-dir)/hooks
```

If the hook aborts a commit, run the validator manually to see details, fix the staged files, then retry the commit.

