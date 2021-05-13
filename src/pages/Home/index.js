import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Touchable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Jerseys from '../../component/Jerseys';
import { jerseysData } from '../../productInfo.js' ;

export default function Home() {
 const navigation = useNavigation();
 const jersey = jerseysData;

 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Image
        source={require('../../assets/nba_banner.png')}
        style={styles.image}
        />


        <View style={styles.labelContainer}>
          <Text style={[styles.text, { color: '#CECECF' }]}>TENIS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
          <Text style={styles.text}>REGATAS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>CAMISETAS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>SHORTS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.textContainer}>

            <Text style={styles.text}>REGATAS</Text>
            <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>


            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
        </View>        
        <View style={styles.line}/>

        <ScrollView>
          <Text style={styles.text}>LANÇAMENTOS (20/21)</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys img={jersey.nets.imgPath} cost={jersey.nets.cost} >
                {[jersey.nets.team, " ", jersey.nets.number, " ", jersey.nets.playerName]}
              </Jerseys>
              <Jerseys img={jersey.lakers.imgPath} cost={jersey.lakers.cost}>
                {[jersey.lakers.team, " ", jersey.lakers.number, " ", jersey.lakers.playerName]}
              </Jerseys>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys img={jersey.gsw.imgPath} cost={jersey.gsw.cost}>
                {[jersey.gsw.team, " ", jersey.gsw.number, " ", jersey.gsw.playerName]}
              </Jerseys>
              <Jerseys img={jersey.clippers.imgPath} cost={jersey.clippers.cost}>
                {[jersey.clippers.team, " ", jersey.clippers.number, " ", jersey.clippers.playerName]}
              </Jerseys>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys img={jersey.phila.imgPath} cost={jersey.phila.cost}>
                {[jersey.phila.team, " ", jersey.phila.number, " ", jersey.phila.playerName]}
              </Jerseys>
              <Jerseys img={jersey.mavericks.imgPath} cost={jersey.mavericks.cost}>
                {[jersey.mavericks.team, " ", jersey.mavericks.number, " ", jersey.mavericks.playerName]}
              </Jerseys>
          </View>

          <View style={{height: 300}}></View>
        </ScrollView>


     </View>
   </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',  
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: '2%',
    marginHorizontal: '2%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%' 
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
})