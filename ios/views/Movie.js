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

class Movie extends React.Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>test movie</Text>
      </View>
    );
  }
}

module.exports = Movie;
