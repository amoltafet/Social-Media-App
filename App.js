import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './Stack';

export default function App() {
  return (
    <Stack></Stack>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
