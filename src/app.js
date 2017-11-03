import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
   state = { loggedIn: null };

   // copy config from websetup in firebase
   // use single quotes
   componentWillMount() {
      firebase.initializeApp({
         apiKey: 'AIzaSyCqXtMwXDRZ5Sdz_jrE3m7BEOc256zYioU',
         authDomain: 'authentication-4a8e4.firebaseapp.com',
         databaseURL: 'https://authentication-4a8e4.firebaseio.com',
         projectId: 'authentication-4a8e4',
         storageBucket: 'authentication-4a8e4.appspot.com',
         messagingSenderId: '463376040524'
       });

       // handles signin and signout
       firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({ loggedIn: true});
         } else {
            this.setState({ loggedIn: false });
         }
       });
   }

   renderContent() {
      switch (this.state.loggedIn) {
         case true:
      return (
         <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
               Log out
            </Button>
         </CardSection>
      );
         case false:
            return <LoginForm />
         default:
            return <CardSection><Spinner /></CardSection>
      }
   }

   render() {
      return (
         <View>
            <Header headerText="Authentication" />
            {this.renderContent()}
         </View>
      );
   }
}

export default App;
