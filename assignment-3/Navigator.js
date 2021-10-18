import * as React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileView from './view/ProfileView';
import RepoView from './view/RepoView';
import FollowerView from './view/FollwerView';
import FollowingView from './view/FollowingView';


const Tab = createBottomTabNavigator();

/**
 * function for the tab navigator
 */
const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Profile' component={ProfileView} options = {{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source ={require('./assets/profile.png')}
              resizeMode = 'contain'
              // use different styles for focused and not focused icons
              style = { focused? tabStyle.focusedStyle : tabStyle.notFocused}
            />
          </View>)
      }}/>
      <Tab.Screen name='Repo' component={RepoView} options = {{
        tabBarIcon: ({focused}) => (
        <View>
        <Image
          source ={require('./assets/repo.png')}
          resizeMode = 'contain'
          // use different styles for focused and not focused icons
          style = { focused? tabStyle.focusedLarge : tabStyle.notFocusedLarge}
        />
        </View>)
      }}/>
      <Tab.Screen name='Following' component={FollowingView} options = {{
        tabBarIcon: ({focused}) => (
        <View>
        <Image
          source ={require('./assets/follow.png')}
          resizeMode = 'contain'
          // use different styles for focused and not focused icons
          style = { focused? tabStyle.focusedLarge : tabStyle.notFocusedLarge}
        />
        </View>)
      }}/>
      <Tab.Screen name='Follower' component={FollowerView} options = {{
        tabBarIcon: ({focused}) => (
        <View>
        <Image
          source ={require('./assets/follow.png')}
          resizeMode = 'contain'
          // use different styles for focused and not focused icons
          style = { focused? tabStyle.focusedLarge : tabStyle.notFocusedLarge}
        />
        </View>)
      }}/>
    </Tab.Navigator>
  );
}

/**
 * style for navigator tab badges
 */
const tabStyle = StyleSheet.create({
    focusedStyle: {
      width: 20,
      height: 20,
      tintColor: '#34b1eb' 
    },
    notFocused: {
      width: 20,
      height: 20,
      tintColor:'#000000'
    },
    focusedLarge: {
      width: 25,
      height: 25,
      tintColor: '#34b1eb' 
    },
    notFocusedLarge: {
      width: 25,
      height: 25,
      tintColor:'#000000'
    }
})

export default Navigator