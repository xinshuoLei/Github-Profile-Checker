import * as React from 'react';
import { useState, useEffect } from 'react';
import {
   Text, View, ScrollView, FlatList, StyleSheet, Dimensions, Image, Button, TouchableOpacity
} from 'react-native';
import ApiRequest from '../model/APIRequest';
import FollowerAndFollowing from '../model/FollowerAndFollowingModel';
 
 
/**
* The screen for following
*/
const FollowingView = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // call api request to get data needed
  useEffect(() => {
    ApiRequest("IjzerenHein")
      .then((json) => setData(new FollowerAndFollowing(json)))
      .finally(() => setLoading(false));
  }, []);


  const renderItem = ({item}) => {
    return (
      <View style = {followerStyle.repoView}>
        <Image source={{ uri: item.avatarUrl }} style={followerStyle.avatar} />
        <Text style = {{fontSize: 20, marginLeft: 15, fontWeight: 'bold'}}>{item.login}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('User Profile',  {user: item.login,})}>
          <Image source={require('../assets/link.png')} style = {{width: 15, height : 15, marginLeft : 5, tintColor: '#0645AD'}}/>
        </TouchableOpacity>
        <Text style = {{fontSize: 17, marginLeft: 15}}>{item.name ? item.name : 'N/A'}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {isLoading ? (
        // display a text indicating view is loading if loading not completed
        (<Text>Loading</Text>)
      ) : (
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          contentContainerStyle={{justifyContent: 'center'}}
          data = {data.following}
          renderItem = {renderItem}>
      
        </FlatList>
      </View>)}
    </ScrollView>
  );
};

/**
* style for components in profile view
*/
const followerStyle = StyleSheet.create({
  repoView: {
    flexDirection : 'row', 
    height: 75, 
    width : Dimensions.get('window').width,
    backgroundColor : '#D9DBDA',
    marginTop: 10,
    alignItems: 'center'
  },
  avatar : {
    width: 50, 
    height: 50, 
    marginLeft: 35, 
    borderRadius: 50 / 2
  }
});

export default FollowingView;
