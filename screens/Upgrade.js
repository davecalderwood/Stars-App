import React, { Component } from 'react';
import { View, Text, Button, styles } from 'react-native';

export class Upgrade extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Button onPress={() => this.props.navigation.navigate('TicketScreen')} title="Purchase Tickets"/>
        <Text>Upgrade Seats</Text>
      </View>
    )
  }
}

export default Upgrade