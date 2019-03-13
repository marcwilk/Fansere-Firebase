import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import firebase from 'firebase'
import 'firebase/firestore'


export default class Chatdisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: "soalBDZkkoMBzJAd5EdQsE5x8113",
      conversations: []
    }
  }


  componentDidMount() {
    firebase.firestore().collection('conversations')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let otherUser = doc.data().members.filter(id => id != this.state.userId)
          let conversation = {
            convo_id: doc.id,
            otherUser: otherUser[0]
          }
          this.setState({conversations: [...this.state.conversations, conversation]})
          console.log(this.state.conversations)
        })
      })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Chat page</Text>
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
