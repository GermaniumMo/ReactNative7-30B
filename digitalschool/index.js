// registerRootComponent ensures the correct registration for Expo and native apps
import { registerRootComponent } from 'expo';

// import the root App component so Expo can register it as the entry point
import App from './App';

// register the App component with the native runtime (Expo handles dev vs production)
// This wraps App with the appropriate AppRegistry registration under the hood
registerRootComponent(App);
