import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Store() {

  let categories = [];

  return (
      <View style={styles.container}>
          <Text style={styles.text}>
              Construa seu proprio espaço aqui! 
          </Text>

          <View style={styles.inputs}>
              <TextInput
                placeholder="De um nome a sua loja"
              />

              <TextInput
                placeholder="adicione uma nova categoria"
              />  
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00BDFE",
    padding: 18,
    flex: 1
  },
  text: {
    paddingTop: '10%'
  },
  inputs: {
    padding: 20
  }
})