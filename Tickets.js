import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Tickets extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Button onPress={() => this.props.navigation.navigate('UpgradeScreen')} title="Upgrade Seat"/>
        <Text>Purchase Tickets</Text>
      </View>
    )
  }
}

export default Tickets