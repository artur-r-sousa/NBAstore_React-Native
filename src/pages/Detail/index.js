import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import SizeButton from '../../component/SizeButton';
import BuyButton from '../../component/BuyButton';
import Footer from '../../component/Footer';
import { jerseysData } from '../../productInfo.js';

export default function Detail({ route, navigation }) {

  const { team } = route.params;
  const jerseyData = jerseysData[team];
  const frontSide = jerseyData.frontSidePath;
  const backSide = jerseyData.backSidePath;

  const [jersey, setJersey] = useState(frontSide)
  
  useEffect(()=>{
    navigation.setOptions({
      headerTitle: jerseyData.team
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
          <Text style={[styles.title, { fontSize: 30 }]}>{[jerseyData.team, " ", jerseyData.number, " ", jerseyData.playerName]}</Text>
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
            {jerseyData.title}
          </Text>
          
          <Text style={styles.textContent}>
            {jerseyData.description}
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