import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text, View, ScrollView, FlatList, StyleSheet, Dimensions, Image,
} from 'react-native';
import ApiRequest from '../model/APIRequest';
import RepoModel from '../model/RepoModel';

/**
* style for components in repo view
*/
const repoStyle = StyleSheet.create({
  repoView: {
    height: 85,
    width: Dimensions.get('window').width,
    backgroundColor: '#D9DBDA',
    marginTop: 10,
    justifyContent: 'center',
  },
  singleView: {
    flexDirection: 'row',
    height: 18,
    width: Dimensions.get('window').width,
    backgroundColor: '#D9DBDA',
    marginTop: 10,
    alignItems: 'center',
  },
  owner: {
    fontSize: 13,
    marginLeft: 10,
    color: '#0645AD',
  },
  avatar: {
    width: 25,
    height: 25,
    marginLeft: 15,
    borderRadius: 25 / 2,
  },
});

/**
* The screen for Repos
*/
const RepoView = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // call api request to get data needed
  useEffect(() => {
    ApiRequest('IjzerenHein')
      .then((json) => setData(new RepoModel(json)))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <View style={repoStyle.repoView}>
      <View style={repoStyle.singleView}>
        <Text style={{ fontSize: 18, marginLeft: 15, fontWeight: 'bold' }}>{item.name}</Text>
        <Image source={{ uri: item.owner.avatarUrl }} style={repoStyle.avatar} />
        <Text style={repoStyle.owner}>{item.owner.login}</Text>
      </View>
      <View style={{ width: Dimensions.get('window').width - 15 }}>
        <Text style={{ fontSize: 13, marginLeft: 15, marginTop: 10 }}>{item.description}</Text>
      </View>
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
            data={data.repos}
            renderItem={renderItem}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default RepoView;
