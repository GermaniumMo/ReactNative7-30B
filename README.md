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
