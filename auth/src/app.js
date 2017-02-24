import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
  firebase.initializeApp({
      apiKey: 'AIzaSyB6bvYxQbuaRV8n-Pty_-ckAnhxa3pmHU0',
      authDomain: 'authentication-382fc.firebaseapp.com',
      databaseURL: 'https://authentication-382fc.firebaseio.com',
      storageBucket: 'authentication-382fc.appspot.com',
      messagingSenderId: '1070570833532'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
