import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Container, Content, Icon, Header, Left, Body, Right, Button } from 'native-base'
import firebase from 'firebase'
import 'firebase/firestore'

export default class Profiledisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }}>
        <Header>
          <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text style={{ justifyContent: 'center' }}>Fansere</Text></Body>
          <Right><Icon name="ios-send-outline" style={{ paddingLeft: 10 }}></Icon></Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={require('../../images/logo.png')} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Roster</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>205</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>Check-Ins</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>
                    <Button bordered dark style={{ flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center'}}>
                    <Icon name="settings" style={{ color: 'black' }}></Icon></Button>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Fansere</Text>
                <Text>LeBron Sux | Biggest Browns Fan</Text>
                <Text>www.fansere.com</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
    padding: 20,
  }
})
