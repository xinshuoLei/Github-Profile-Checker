import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text, View, SafeAreaView, Image, StyleSheet, Button,
} from 'react-native';
import ApiRequest from '../model/APIRequest';
import ProfileModel from '../model/ProfileModel';

/**
 * style for components in profile view
 */
const profileStyle = StyleSheet.create({
  largeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  firstText: {
    fontSize: 15,
    marginTop: 10,
  },
  regularText: {
    fontSize: 15,
    marginTop: 8,
  },
});

/**
 * screen for user profile
 */
const ProfileView = ({ route, navigation }) => {
  const { user } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // call api request to get data needed
  useEffect(() => {
    ApiRequest(user)
      .then((json) => setData(new ProfileModel(json)))
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        // display a text indicating view is loading if loading not completed
        (<Text>Loading</Text>)
      )
      // display profile when loading finishes
        : (
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Image source={{ uri: data.avatar }} style={{ width: 150, height: 150 }} />
              </View>
              <View style={{ marginLeft: 30, marginTop: 30 }}>
                <Text style={profileStyle.largeText}>{data.userName ? data.userName : 'no username found'}</Text>
                <Text style={profileStyle.firstText}>{data.name ? data.name : 'no name found'}</Text>
                <Text style={profileStyle.regularText}>{data.email ? data.email : 'no email found'}</Text>
                <Text style={profileStyle.regularText}>{data.website ? data.website : 'no website found'}</Text>
                <Text />
              </View>
            </View>
            <View style={{
              width: 400, marginTop: 50, justifyContent: 'center',
            }}
            >
              <Text style={profileStyle.regularText}>
                created at:
                {data.createdAt}
              </Text>
              <Text style={profileStyle.regularText}>{data.bio}</Text>
              <Text style={profileStyle.regularText}>
                total number of followers:
                {data.followerCount}
              </Text>
              <Button
                title="Go to Folower"
                onPress={() => navigation.navigate('Navigator', { screen: 'Follower' })}
              />
              <Text style={profileStyle.regularText}>
                total number of followings:
                {data.followingCount}
              </Text>
              <Button
                title="Go to Following"
                onPress={() => navigation.navigate('Navigator', { screen: 'Following' })}
              />
              <Text style={profileStyle.regularText}>
                total number of public repositories:
                {data.repoCount}
              </Text>
              <Button
                title="Go to Repo"
                onPress={() => navigation.navigate('Navigator', { screen: 'Repo' })}
              />
            </View>
          </View>
        )}
    </SafeAreaView>
  );
};

export default ProfileView;
