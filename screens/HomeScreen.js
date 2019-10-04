import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function HomeScreen({navigation}) {
  
  const navigateTo = (page) => {
    navigation.navigate(page)
  }
  return (
    <View style={styles.container}>
      <Text onPress={() => navigateTo('Tasks')}>tasks</Text>
      <Text onPress={() => navigateTo('Issues')}>Issues</Text>
      <Text onPress={() => navigateTo('Physicians')}>Physicians</Text>
      <Text onPress={() => navigateTo('Schedule')}>Schedule</Text>
      <Text onPress={() => navigateTo('ManageInsurance')}>ManageInsurance</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Care More',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  }
});
