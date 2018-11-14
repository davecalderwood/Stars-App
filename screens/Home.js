import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';

export class Home extends Component {
  render() {
    return (
// Navigation for the Stars App
// Home, Settings, Purchase Tickets, Upgrage Seat, Stars Gear, Explore Arena
// Logo exists on the home page
  <ScrollView>
      <View style={styles.background}>
      <Image style={styles.logo} source={require('./SLC_Stars.png')} />
      </View>
      <View style={styles.backgroundBottom}>
      <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
        <View style={styles.gamesBackground}>
          <Text style={styles.nextGame}>Upcoming Games</Text>
        </View>
      <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('TicketScreen')} title="Purchase Tickets" />
          {/* <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} /> acts as <hr/> */}
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('UpgradeScreen')} title="Upgrade Seat"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('RosterScreen')} title="Roster"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('StatsScreen')} title="Stats"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('ScheduleScreen')} title="Schedule"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('GearScreen')} title="Stars Gear"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('ArenaScreen')} title="Explore Arena"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('AboutScreen')} title="About the SLC Stars"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
          <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Go to Settings"/>
              <View style={{ borderBottomColor: 'navy', borderBottomWidth: 1, }} />
      </View>
  </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'blue',
  },
  backgroundBottom: {
    backgroundColor: 'gold',
  },
  gamesBackground: {
    backgroundColor: 'lightgrey',
  },
  nextGame: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  settings: {
    alignContent: 'flex-end',
  },
  button: {
    fontSize: 20,
  },
  logo: {
    width: 80 + '%',
    height: 370,
    alignSelf: 'center',

  },
  route: {
    fontSize: 20,
  },
})

export default Home