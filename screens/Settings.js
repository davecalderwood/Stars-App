import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Settings extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Text>This is the Settings screen</Text>
      </View>
    )
  }
};

export default Settings;