import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import firebase from 'firebase'
import 'firebase/firestore'

export default class Profiledisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    padding: 20,
  }
})
