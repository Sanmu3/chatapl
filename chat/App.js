import React, {Component} from 'react';
import SplashScreen from './src/screen/SplashScreen';
import Navigation from './src/screen/Navigasi';
import io from 'socket.io-client';
export default class App extends Component {
  state = {
    splash: true,
  };

  pindah = () => {
    if (this.state.splash) {
      return <SplashScreen />;
    } else {
      return <Navigation />;
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 2000);
  }
  render() {
    return <>{this.pindah()}</>;
  }
}
