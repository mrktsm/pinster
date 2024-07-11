import { Stack, Link } from 'expo-router';
import Map from '~/components/Map';
import LoadingScreen from '~/screen/LoadingScren';
import HomeScreen from '~/screen/HomeScreen';
import LoginScreen from '~/screen/LoginScreen';
import RegisterScreen from '~/screen/RegisterScreen';
import { createStackNavigator } from "react-navigation-stack"
// import * as firebase from 'firebase'
// import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from '@env';

// firebase.initializeApp({
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
//   measurementId: FIREBASE_MEASUREMENT_ID,
// });


// export default function Home() {
//   return (
//     <>
//       <Stack.Screen options={{ title: 'Home' }} />
//       <Map />
//       < LoadingScreen />
//     </>
//   );
// }

const AppStack = createStackNavigator({
  Home: HomeScreen
})