import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Touchable, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Jerseys from '../../component/Jerseys';
import { jerseysData } from '../../productInfo.js';

export default function Home() {
 const jersey = jerseysData;
 const navigation = useNavigation();
 const categories = ["TENIS", "REGATAS", "CAMISETAS"];

 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Image
        source={require('../../assets/nba_banner.png')}
        style={styles.image}
        />

        <View style={styles.labelContainer}>
          {categories.map((value, key) => {
            return(
              <View style={styles.labelContainer} key={key}>
                <Text style={[styles.text, { color: '#CECECF', marginRight:'2%' }]}>{categories[key]}</Text>
                <Text style={[styles.text, { color: '#CECECF', marginLeft: 12 }]}>•</Text>
              </View>
            )
          })}
            
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}} onPress={()=>{navigation.navigate('Checkout')}}>
              <MaterialIcons
                name="shopping-cart"
                size={24}
                color="#000"
                
              />
            </TouchableOpacity>
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
          <Text style={[styles.text, {marginLeft: 16}]}>LANÇAMENTOS (20/21)</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys img={jersey.nets.imgPath} cost={jersey.nets.cost} teamName = 'nets'>
                {[jersey.nets.team, " ", jersey.nets.number, " ", jersey.nets.playerName]}
              </Jerseys>
              <Jerseys img={jersey.lakers.imgPath} cost={jersey.lakers.cost} teamName = 'lakers'>
                {[jersey.lakers.team, " ", jersey.lakers.number, " ", jersey.lakers.playerName]}
              </Jerseys>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}} >
              <Jerseys img={jersey.gsw.imgPath} cost={jersey.gsw.cost} teamName = 'gsw'>
                {[jersey.gsw.team, " ", jersey.gsw.number, " ", jersey.gsw.playerName]}
              </Jerseys>
              <Jerseys img={jersey.clippers.imgPath} cost={jersey.clippers.cost} teamName = 'clippers'> 
                {[jersey.clippers.team, " ", jersey.clippers.number, " ", jersey.clippers.playerName]}
              </Jerseys>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys img={jersey.phila.imgPath} cost={jersey.phila.cost} teamName = 'phila'>
                {[jersey.phila.team, " ", jersey.phila.number, " ", jersey.phila.playerName]}
              </Jerseys>
              <Jerseys img={jersey.mavericks.imgPath} cost={jersey.mavericks.cost} teamName = 'mavericks'>
                {[jersey.mavericks.team, " ", jersey.mavericks.number, " ", jersey.mavericks.playerName]}
              </Jerseys>
          </View>

          <View style={{height: (Dimensions.get('screen').height * 40) / 100 }}></View>
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

  },
  image: {
    width: '100%',
    height: (Dimensions.get('screen').height * 20) / 100,
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
    
 
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
})