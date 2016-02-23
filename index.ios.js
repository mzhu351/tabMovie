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
          systemIcon="history"
          selected={this.state.selectedTab === "tabOne"}
          onPress={() => this.setTab('tabOne')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Tab One</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab === "tabTwo"}
          onPress={() => this.setTab('tabTwo')}>
          <View style={styles.tabContent}> 
            <Text style={styles.tabText}>Tab Two</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"systemIcon="bookmarks"
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
