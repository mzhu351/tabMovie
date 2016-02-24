import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    margin: 50,
    fontSize: 25,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

class Movie extends React.Component {
  render() {
    return(

      <View style={styles.container}>

        <Video source={{uri: "broadchurch"}}
               style={styles.backgroundVideo}
               resizeMode="contain"
               repeat={true} key="video2" />
        <Text style={styles.title}> My Video</Text>
      </View>
    )
  }
}


module.exports = Movie;
