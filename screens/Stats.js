import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Stats extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Button onPress={() => this.props.navigation.navigate('ScheduleScreen')} title="Schedule"/>
        <Text>Stats</Text>
      </View>
    )
  }
}

export default Stats