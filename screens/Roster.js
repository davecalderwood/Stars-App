import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Roster extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Button onPress={() => this.props.navigation.navigate('ScheduleScreen')} title="Schedule"/>
        <Button onPress={() => this.props.navigation.navigate('StatsScreen')} title="Stats"/>
        <Text>Roster</Text>
      </View>
    )
  }
}

export default Roster