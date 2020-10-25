import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.43.229:3000');
    this.socket.on('chat message', (msg) => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image
            style={styles.foto}
            source={require('../logo/HomeScreen/conan.jpg')}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.nama}>nama kontak</Text>
            <Text style={styles.stat}>status</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ScrollView>
            <View
              style={{alignSelf: 'flex-start', margin: 10, maxWidth: '60%'}}>
              <Text style={styles.penerima}>assalamu'alaikum</Text>
            </View>
            <View style={{alignSelf: 'flex-end', margin: 10, maxWidth: '60%'}}>
              {this.state.chatMessages.map((chatMessage) => (
                <Text style={styles.pengirim} key={chatMessage}>
                  {chatMessage}
                </Text>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.input}>
          <TextInput
            onChangeText={(input) => this.setState({chatMessage: input})}
            style={{marginRight: '33%', width: '50%'}}
            placeholder="masukan sesuatu disini"
            value={this.state.chatMessage}
            multiline={true}
          />
          <TouchableOpacity onPress={() => this.submitChatMessage()}>
            <Image
              style={{width: 25, height: 25, marginRight: 20}}
              source={require('../logo/ChatScreen/direct.png')}
            />
          </TouchableOpacity>
        </View>
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
    color: '#fff',
  },
  stat: {
    fontSize: 12,
    color: '#f6f5f5',
  },
  input: {
    justifyContent: 'flex-end',
    margin: 15,
    backgroundColor: '#b0b0b0',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  penerima: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#eeecda',
    borderRadius: 20,
  },
  pengirim: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#01c5c4',
    borderRadius: 20,
  },
});
