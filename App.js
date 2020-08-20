import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './Store/Redux/reducer';
import SubmitForm from './Containers/form';

const store = createStore(reducer, composeWithDevTools())

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SubmitForm />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}


