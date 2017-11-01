import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
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
   }

   render() {
      return (
         <View>
            <Header headerText="Authentication" />
            <Text>This is an App!</Text>
         </View>
      );
   }
}

export default App;
