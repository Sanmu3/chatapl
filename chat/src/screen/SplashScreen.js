import React, {Component} from 'react';
import {Text, View, Image, ActivityIndicator, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image
          style={styles.image}
          source={require('../logo/splashscreen/chat.png')}
        />
        <Text style={styles.text}> Talk with your friends </Text>
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#021234"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {justifyContent: 'center', alignItems: 'center', flex: 1},
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  indicator: {
    marginTop: 100,
  },
});
