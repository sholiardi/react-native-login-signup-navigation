import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Routes from './src/Routes';
// import Signup from './src/pages/Signup';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
