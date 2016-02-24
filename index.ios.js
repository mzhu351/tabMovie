/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

var Movie = require('./ios/views/Movie');
var Bookmarks = require('./ios/views/Bookmarks');

class tabMovie extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'tabOne'}
  }
  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="featured"
          selected={this.state.selectedTab === "movie"}
          onPress={() => this.setTab('movie')}>
          <Movie/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab === "bookmarks"}
          onPress={() => this.setTab('bookmarks')}>
          <Bookmarks/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === "tabThree"}
          onPress={() => this.setTab('tabThree')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab Three</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  }
});

AppRegistry.registerComponent('tabMovie', () => tabMovie);
