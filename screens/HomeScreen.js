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
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  }
});
