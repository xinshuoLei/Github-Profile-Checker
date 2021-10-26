/* eslint-disable global-require */
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text, View, ScrollView, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity,
} from 'react-native';
import ApiRequest from '../model/APIRequest';
import FollowerAndFollowing from '../model/FollowerAndFollowingModel';

/**
 * style for components in profile view
 */
const followerStyle = StyleSheet.create({
  oneFollowerView: {
    flexDirection: 'row',
    height: 75,
    width: Dimensions.get('window').width,
    backgroundColor: '#D9DBDA',
    marginTop: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    marginLeft: 35,
    borderRadius: 50 / 2,
  },
  link: {
    width: 15,
    height: 15,
    marginLeft: 5,
    tintColor: '#0645AD',
  },
});

/**
 * The screen for follower
 */
const FollowerView = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // call api request to get data needed
  useEffect(() => {
    ApiRequest('IjzerenHein')
      .then((json) => setData(new FollowerAndFollowing(json)))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <View style={followerStyle.oneFollowerView}>
      <Image source={{ uri: item.avatarUrl }} style={followerStyle.avatar} />
      <Text style={{ fontSize: 20, marginLeft: 15, fontWeight: 'bold' }}>{item.login}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('User Profile', { user: item.login })}
      >
        <Image source={require('../assets/link.png')} style={followerStyle.link} />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginLeft: 15 }}>{item.name ? item.name : 'N/A'}</Text>
    </View>
  );

  return (
    <ScrollView>
      {isLoading ? (
        // display a text indicating view is loading if loading not completed
        (<Text>Loading</Text>)
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            contentContainerStyle={{ justifyContent: 'center' }}
            data={data.followers}
            renderItem={renderItem}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default FollowerView;
/* eslint-enable global-require */
