/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Image,
  View
} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import Formulario from './src/componentes/formulario';
import {Boton, Spinner} from './src/componentes/lib';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  state = { sesionIniciada: null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBS1LJpUumDibNUn2RkjkVKzkZMn7sI-BQ',
      authDomain: 'loginmepal.firebaseapp.com',
      databaseURL: 'https://loginmepal.firebaseio.com',
      projectId: 'loginmepal',
      storageBucket: 'loginmepal.appspot.com',
      messagingSenderId: '904940944858'
    });

    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({ sesionIniciada: true});
      } else {
        this.setState({ sesionIniciada: false});
      }

    });
  }

  contenidoSegunSesion(){
      switch (this.state.sesionIniciada) {
        case true:
          return(
              <View style={{height: 35}}>
                <Boton
                    texto='Cerrar Sesión'
                    onPress={() => firebase.auth().signOut() }
                />
              </View>
              );
        case false:
            return(
              <Formulario/>
            )
        default:
          return <Spinner size={'large'} />
          break;
      }
  }
  /* b96122 */

  /*  828995 */
  render() {

    return (
      <View style={styles.container}>
        {this.contenidoSegunSesion()}
      </View>
    );
/*
return (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
    <Icon name="futbol-o" size={30} color="#009e34"/>
    <Image
        style={styles.imageStyles}
        source={require('./assets/basket.png')}
    />
    <Icon name="money" size={30} color="#5780a7"/>
    <Icon name="user" size={30} color="#fffe56"/>
  </View>
);

*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageStyles: {
        height: 200,
        width: 200
    }
});
