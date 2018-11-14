import React, { Component } from 'react';
import { View, Text, Button, Linking, StyleSheet, Image } from 'react-native';

export class Gear extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Text style={styles.title}>Stars Gear</Text>
        <Text style={styles.gear}
            onPress={() => Linking.openURL('https://gleaguestore.nba.com/salt-lake-city-stars/t-31434354+z-9362446-836120592')}>Official Salt Lake City Stars Gear!
        </Text>
        <Image style={styles.swag} source={require('./Stars_Gear.jpeg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
    gear: {
        color: 'blue',
        textAlign: 'center',
    },
    swag: {
        alignSelf: 'center',
    },
})

export default Gear