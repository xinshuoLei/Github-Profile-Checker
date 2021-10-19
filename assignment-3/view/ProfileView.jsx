import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text, View, SafeAreaView, Image, StyleSheet,
} from 'react-native';
import ApiRequest from '../model/APIRequest';
import ProfileModel from '../model/model';

/**
 * screen for user profile
 */
const ProfileView = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  let test;

  // call api request to get data needed
  useEffect(() => {
    ApiRequest()
      .then((json) => setData(new ProfileModel(json)))
      .finally(() => setLoading(false));
  }, []);


  return (
    <SafeAreaView style={{ justifyContent: 'center' }}>
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
              marginLeft: 30, width: 350, marginTop: 200, justifyContent: 'center',
            }}
            >
              <Text style={profileStyle.regularText}>
                created at:
                {data.createdAt}
              </Text>
              <Text style={profileStyle.regularText}>{data.bio}</Text>
            </View>
          </View>
        )}
    </SafeAreaView>
  );
};

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
    marginTop: 5,
  },
});

export default ProfileView;
