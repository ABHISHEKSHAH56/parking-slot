import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import Routes from './src/navigations/Routes';
import {TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/redux/configureStore';
import persistStore from 'redux-persist/es/persistStore';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  let persistor = persistStore(store);
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
