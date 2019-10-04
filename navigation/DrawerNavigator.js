import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HomeScreen } from '../screens/Screens'; // <-- Import screen components

import { Drawer, DrawerHeaderFooter, Icon, Button } from 'react-native-ui-kitten';

const LogoutIcon = (style) => (
  <Icon {...style} name='log-out' />
);

const LogoutButton = (style) => (
  <Button style={style} icon={LogoutIcon} />
);

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
        <Drawer 
          data={this.drawerData} 
          onSelect={this.onRouteSelect}
          header={() => <DrawerHeaderFooter
            title='John Doe'
            description='React Native Developer'
            accessory={LogoutButton}
          />}
          />
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