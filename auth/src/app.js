import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyB6bvYxQbuaRV8n-Pty_-ckAnhxa3pmHU0',
        authDomain: 'authentication-382fc.firebaseapp.com',
        databaseURL: 'https://authentication-382fc.firebaseio.com',
        storageBucket: 'authentication-382fc.appspot.com',
        messagingSenderId: '1070570833532'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={spinnerContainerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={appContainerStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  appContainerStyle: {
    flex: 1
  },
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentStyle: {
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'flex-start'

  }
};

const { appContainerStyle, spinnerContainerStyle, contentStyle } = styles;

export default App;
