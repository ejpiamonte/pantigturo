import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './app/index';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
