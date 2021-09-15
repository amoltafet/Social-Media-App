import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66A6FD',
  },
});

const EditProfile = ({}) => {
  return (
    <View style={styles.container}>
      <Text>EditProfile</Text>
    </View>
  );
};

export default EditProfile;