import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/navigations/Routes';
import {TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/redux/configureStore';
import persistStore from 'redux-persist/es/persistStore';

export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
