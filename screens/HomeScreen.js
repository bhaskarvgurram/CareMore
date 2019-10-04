import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Layout, Text, TopNavigation, Icon, TopNavigationAction } from 'react-native-ui-kitten';


const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const EditIcon = (style) => (
  <Icon {...style} name='edit' />
);

const MenuIcon = (style) => (
  <Icon {...style} name='more-vertical' />
);

const BackAction = (props) => (
  <TopNavigationAction {...props} icon={BackIcon} />
);

const EditAction = (props) => (
  <TopNavigationAction {...props} icon={EditIcon} />
);

const MenuAction = (props) => (
  <TopNavigationAction {...props} icon={MenuIcon} />
);

export default function HomeScreen() {
  const onBackPress = () => { };
  const renderLeftControl = () => (
    <BackAction onPress={onBackPress} />
  );

  const renderRightControls = () => [
    <EditAction />,
    <MenuAction />,
  ];

  return (
    <>
      <TopNavigation
        title="CareMore"
        leftControl={renderLeftControl()}
        rightControls={renderRightControls()}
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
