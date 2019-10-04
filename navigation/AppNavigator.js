import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import TrackProgress from '../screens/TrackProgress'
import Issues from '../screens/Issues'
import Physicians from '../screens/Physicians'
import Schedule from '../screens/Schedule'
import Chat from '../screens/Chat'
import ManageInsurance from '../screens/ManageInsurance'
import Humana from '../screens/Humana'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Tasks: TasksScreen,
  Issues,
  TrackProgress,
  Physicians,
  Schedule,
  Chat,
  ManageInsurance,
  Humana
});

export default createAppContainer(AppNavigator);