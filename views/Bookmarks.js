import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    margin: 50,
    fontSize: 45,
  }
});

class Bookmarks extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>bookmarks</Text>
      </View>
    );
  }
}

module.exports = Bookmarks;
