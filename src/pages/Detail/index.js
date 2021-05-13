import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import SizeButton from '../../component/SizeButton';
import BuyButton from '../../component/BuyButton';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  const frontSide = require("../../assets/lakers_front.jpg");
  const backSide = require('../../assets/lakers_back.jpg');

  const [jersey, setJersey] = useState(frontSide)
  
  useEffect(()=>{
    navigation.setOptions({
      headerTitle: 'Detalhes'
    })
  })

 return (
   <ScrollView style={styles.container}>
      <TouchableOpacity onPress={()=> {jersey == frontSide ? setJersey(backSide):setJersey(frontSide)}} >
        <Image
        source={jersey}
        style={styles.image}
        />
      </TouchableOpacity>
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}> R$ 479,90</Text>
        </View>

        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Lakers Jersey #23 Lebron James</Text>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF">GGG</SizeButton>
            <SizeButton>GG</SizeButton>
            <SizeButton>G</SizeButton>
            <SizeButton>M</SizeButton>
            <SizeButton>P</SizeButton>

          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Lakers #23 Gold Hardwood Classic
          </Text>
          
          <Text style={styles.textContent}>
            Through extensive research and attention to detail, Mitchell & Ness Authentics are recreations of the original uniforms worn by the legends of the game. They only use premium fabrics and application as they bring these pieces of history to life. It is an honor to celebrate the history of the game through the uniforms and logos of the icons of sports. Join the celebration with this Los Angeles Lakers Kobe Bryant 2008-09 Hardwood Classics Authentic Jersey.
          </Text>

          <Text style={styles.textList}>
            - Material: 100% Poliester, Mesh
          </Text>

        </View>

        <BuyButton/>

        <View style={styles.line}/>

        <Footer></Footer>
      </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#FFF" 
  },
  image: {   
    height: 400,
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  textContent: {
    fontSize: 16, 
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }, 
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#000',
    marginVertical: '2%'
  }


})