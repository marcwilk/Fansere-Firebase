import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase'
import SignUp from './components/auth/signup'
import TabNavigator from './components/router'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBu6OQLFGgghbxr-i7jiIdMHoToNIf3nG0",
  databaseURL: "https://fansere-application.firebaseio.com",
  projectId: "fansere-application",
};
firebase.initializeApp(config);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: null,
      userId: null
    }
    //this.authCheck = this.authCheck.bind(this)
    //this.toggleLogin = this.toggleLogin.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  // authCheck() {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     var displayName = user.displayName;
  //     var email = user.email;
  //     var emailVerified = user.emailVerified;
  //     var photoURL = user.photoURL;
  //     var isAnonymous = user.isAnonymous;
  //     var uid = user.uid;
  //     var providerData = user.providerData;
  //     console.log(email)
  //     this.setState({auth: true})
  //     // ...
  //   } else {
  //     // User is signed out.
  //     // ...
  //     console.log('Not today fuckface')
  //   }
  //  })
  // }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email)
        console.log(user.uid)
        this.setState({userEmail: user.email})
        this.setState({userId: user.uid})
        console.log(this.state.userId)

      } else {
        console.log('no user signed in')
        this.setState({userEmail: null})
      }
      })
  }

  signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
      })
  }

  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ...
    })
  }

  // logOut() {
  //   firebase.auth().signOut()
  // }

  render() {
    return (
      <View style={styles.container}>
        {this.state.userEmail ? <TabNavigator /> : <SignUp signIn={this.signIn} signUp={this.signUp} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
