import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class PrimeiroProjeto extends Component{

  render(){
    return (
      <View style={styles.padrao}>
        <Text style={styles.azulGrande}>Este é o texto 1</Text>
        <Text style=  {styles.vermelho}>Este é o texto 2</Text>
        <Text style=  {[styles.azulGrande, styles.vermelho]}>Este é o texto 3</Text>
        <Text style=  {[styles.vermelho, styles.azulGrande]}>Este é o texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padrao: {
    paddingTop: 20,
    backgroundColor: "#00FF00"
  },
  azulGrande: {
    color: '#0000FF',
    fontSize:30,
    textAlign: 'center'
  },
  vermelho: {
    color: '#FF0000',
    fontSize: 15
  }
});