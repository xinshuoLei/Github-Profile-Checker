import { Alert } from 'react-native';

const AUTH = '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';


const QUERY = `{
        user(login: "{:USER_LOGIN:}") {
            avatarUrl
            login
            bio
            name
            email
            avatarUrl
            bio
            websiteUrl
            createdAt
            followers(first: 100) {
              nodes {
                avatarUrl
                name
                login
              }
              totalCount
            }
            following(first: 100) {
              nodes {
                avatarUrl
                name
                login
              }
              totalCount
            }
            repositories (first: 100){
              totalCount
              nodes {
                name
                owner {
                  ... on User {
                    login
                  }
                }
                description
              }
            }
        }
    }`;

const ApiRequest = async (user) => {
  // OAuth token
  const url = 'https://api.github.com/graphql';
  const userLogin = "IjzerenHein"
  const query_with_user = QUERY.replace(/\n/g, ' ').replace('{:USER_LOGIN:}', user);
  let jsonData;
  await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // AUTH is a constant for token
      Authorization: `bearer ${AUTH}`,
    },
    body: JSON.stringify({ query: query_with_user }),
  })
    .then((response) => response.json())
    .then((json) => {
      jsonData = json;
      console.log(json)
    })
    .catch((error) => {
      Alert.alert(error)
    });
  return jsonData;
}

export default ApiRequest;
