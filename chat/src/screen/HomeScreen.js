import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      kontak: [],
      text: '',
    };
  }

  addTodo() {
    const {text, kontak} = this.state;
    if (text == '') {
      alert('Isi dulu lah');
    } else {
      this.setState({kontak: [text, ...kontak]}, function () {
        this.saveData();
      });
    }
  }

  saveData() {
    AsyncStorage.setItem(
      'kontak',
      JSON.stringify(this.state.kontak),
    ).catch((err) => console.log(err));
  }

  componentDidMount() {
    AsyncStorage.getItem('kontak')
      .then((response) => {
        if (response) {
          console.log(response);
          let kontak = JSON.parse(response);
          this.setState({kontak: kontak});
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image
            style={styles.headerimg}
            source={require('../logo/HomeScreen/header.png')}
          />
          <Text style={styles.headertext}>Patepang</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Chat')}
          style={styles.kontak}>
          <Image
            style={styles.foto}
            source={require('../logo/HomeScreen/conan.jpg')}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.nama}>nama kontak</Text>
            <Text style={styles.stat}>status</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => AsyncStorage.clear()}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#01c5c4',
  },
  headerimg: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },

  kontak: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 150,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  stat: {
    fontSize: 12,
    color: '#a0a0a0',
  },
});
