import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Layout, Text, TopNavigation, Icon } from 'react-native-ui-kitten';


export default function HomeScreen() {
  return (
    <>
      <TopNavigation
        title="CareMore"
        leftControl={() => <Icon {...style} name='arrow-back' />}
        rightControls={null}
      // style={style}
      />
      <Layout style={styles.container}>
        <Text>Welcome to UI Kitten</Text>
      </Layout>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }
});
