import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Touchable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Jerseys from '../../component/Jerseys'

export default function Home() {
 const navigation = useNavigation();

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
              <Jerseys img={require('../../assets/icon_nets_front.jpg')} cost="R$ 479,90" onClick={()=>{navigation.navigate('Detail')}}>
                Nets 11 Kyrie Irving
              </Jerseys>
              <Jerseys img={require('../../assets/icon_lakers_front.jpg')} cost="R$ 479,90" onClick={()=>{navigation.navigate('Detail')}}>
                Lakers 23 Lebron James 
              </Jerseys>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys img={require('../../assets/icon_warriors_front.png')} cost="R$ 479,90" onClick={()=>{alert('clicou')}}>
                G.S.W. 30 Stephen Curry
              </Jerseys>
              <Jerseys img={require('../../assets/icon_clippers_front.jpg')} cost="R$ 479,90" onClick={()=>{alert('clicou')}}>
                Clippers Paul George
              </Jerseys>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Jerseys 
              img={require('../../assets/icon_phila_front.jpg')} 
              cost="R$ 479,90"
              onClick={()=>{alert('clicou')}}>
                76ers Joel Embiid 21
              </Jerseys>
              <Jerseys img={require('../../assets/icon_dallas_front.png')} cost="R$ 479,90" onClick={()=>{alert('clicou')}}>
                Mavericks 77 Luka Doncic
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