import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Settings from './screens/Settings';
import Home from './screens/Home';
import Tickets from './Tickets';
import Upgrade from './screens/Upgrade';
import Gear from './screens/Gear';
import Arena from './screens/Arena';
import About from './screens/About';
import Roster from './screens/Roster';
import Schedule from './screens/Schedule';
import Stats from './screens/Stats';

// Navigation for the Stars App
// Home, Settings, Purchase Tickets, Upgrage Seat, Stars Gear, Explore Arena, Stats
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingScreen: { screen: Settings },
  TicketScreen: { screen: Tickets },
  UpgradeScreen: { screen: Upgrade },
  GearScreen: { screen: Gear },
  ArenaScreen: { screen: Arena },
  AboutScreen: { screen: About },
  RosterScreen: { screen: Roster },
  ScheduleScreen: { screen: Schedule },
  StatsScreen: { screen: Stats },
});

export default class App extends Component {
  render() {
    return (
        <AppNavigator />

    );
  }
}
