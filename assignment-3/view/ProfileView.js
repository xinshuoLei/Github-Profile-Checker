import * as React from 'react';
import { useState, useEffect } from "react"
import { Text, View, SafeAreaView } from 'react-native';
import ApiRequest from '../model/APIRequest';

/**
 * screen for user profile
 */
const ProfileView = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    ApiRequest()
    .then((json) => setData(json.data.user.websiteUrl))
    .finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading? (
        (<Text>Loading</Text>)
      ):
      (<Text>{data}</Text>
      )}
    </SafeAreaView>
  );
}

export default ProfileView;