import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export class About extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go Home"/>
        <ScrollView>
        <Text style={styles.hometext}>The Salt Lake City Stars are an American basketball team that plays in the NBA G League. The team is based in Salt Lake City, Utah (the same location as its affiliate the Utah Jazz). Beginning in the 2016–17 season, the Stars play at the Lifetime Activities Center-Bruin Arena, on the campus of Salt Lake Community College. 
        Prior to the move to Salt Lake City for the 2016–17 season, the team was known as the Idaho Stampede.</Text>
        <Image style={styles.image} source={require('./Utah_Stars_ABA_logo.png')} />
        <Text style={styles.hometext}>
        The team was purchased by the Jazz on March 24, 2015, and signed a one-year lease at CenturyLink Arena. On April 4, 2016, the Utah Jazz and the NBA Development League announced that the Idaho Stampede would relocate to Salt Lake City for the 2016–17 season and would be renamed as the Salt Lake City Stars. Prior to this announcement, there had not been a D-League team in Utah since the Utah Flash left in 2011.
        </Text>
        <Button onPress={() => this.props.navigation.navigate('AboutScreen')} title="Back to Top"/>
        <Text>.</Text>
        <Text>.</Text>
        <Text>.</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    settings: {
      alignContent: 'flex-end',
    },
    hometext: {
      fontSize: 30,
    },
    image: {
      width: 100 + '%',  
    },
  })
export default About