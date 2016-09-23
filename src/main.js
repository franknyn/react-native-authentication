import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

import Parse from 'parse/react-native';

import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Tweets from './components/tweets/tweets';

const ROUTES = {
  signin: Signin,
  signup: Signup,
  tweets: Tweets
};

//to be refactored

export default class Main extends Component {

  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    Parse.initialize("1234567890_app");
    Parse.serverURL = 'https://parser-server-express.herokuapp.com';
  }

  renderScene(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});