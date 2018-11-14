import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export class Arena extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <Text>Explore Arena</Text>
        <Image style={styles.arena1} source={require('./Stars_Arena.jpeg')} />
        <Image style={styles.arena} source={require('./Stars_Arena2.jpeg')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    arena: {
      alignSelf: 'center',
      width: 100 + '%',
    },
    arena1: {
        alignSelf: 'center',
        width: 100 + '%',
        height: 400,
    },
  })

export default Arena