import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Tasks: TasksScreen
});

export default createAppContainer(AppNavigator);