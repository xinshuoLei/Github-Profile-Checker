import React from 'react';
import renderer from 'react-test-renderer';
import ProfileView from '../view/ProfileView.jsx';
import FollowingView from '../view/FollowingView.jsx'
import FollowerView from '../view/FollwerView.jsx'


it('renders correctly - profile loading', () => {
  const tree = renderer.create(<FollowerView />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly - follower loading', () => {
  const tree = renderer.create(<ProfileView />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly - following loading', () => {
  const tree = renderer.create(<FollowingView />).toJSON();
  expect(tree).toMatchSnapshot();
});
