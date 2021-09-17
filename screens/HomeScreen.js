import React from 'react';
import {ScrollView, StyleSheet, View } from 'react-native';
import Feed from '../components/PostCard';
import Ionicons from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
},
titleBar: {
  backgroundColor: '#ffff',
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 70,
  marginHorizontal: 16
},
});

const HomeScreen = ({navigation}) => {
  return (
    

    
    <ScrollView>
      <View style={styles.titleBar}>
        
        <View style={styles.add}>
            <Ionicons name="ios-add" size={30} color="#DFD8C9" style={{ marginTop: 6, marginLeft: 3 }}></Ionicons>
        </View>
        
      </View>
    <Feed></Feed>
    </ScrollView>
    
    
  );
};

export default HomeScreen;