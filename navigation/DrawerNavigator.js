import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HomeScreen } from '../screens/Screens'; // <-- Import screen components

import { Drawer } from 'react-native-ui-kitten';

class DrawerNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.drawerData = props.items.map(this.createDrawerItem);
  }

  onRouteSelect = (index) => {
    const { [index]: route } = this.drawerData;
    this.props.navigation.navigate(route.title);
  };

  createDrawerItem = ({ routeName }) => ({
    title: routeName,
  });

  render() {
    return (
      <SafeAreaView>
        <Drawer data={this.drawerData} onSelect={this.onRouteSelect}/>
      </SafeAreaView>
    );
  }
}

export const DrawerNavigator = createDrawerNavigator({
  HomeScreen: HomeScreen,
}, {
  contentComponent: DrawerNavigation,
});

export default DrawerNavigator