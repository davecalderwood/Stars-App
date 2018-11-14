import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Schedule extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Button onPress={() => this.props.navigation.navigate('RosterScreen')} title="Roster"/>
        <Text>Schedule</Text>
      </View>
    )
  }
}

export default Schedule