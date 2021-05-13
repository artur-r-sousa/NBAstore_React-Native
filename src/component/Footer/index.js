import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Jerseys from '../Jerseys'

export default function Footer() {
 return (
   <View > 
       <Text style={styles.title}> VOCE TAMBEM PODE GOSTAR </Text>
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Jerseys img={require('../../assets/icon_clippers_front.jpg')} cost="R$ 479,90"> Clippers #13 Paul George</Jerseys>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Jerseys img={require('../../assets/icon_phila_front.jpg')} cost="R$ 479,90"> Clippers #21 Joel Embiid</Jerseys>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Jerseys img={require('../../assets/icon_dallas_front.png')} cost="R$ 479,90"> Mavericks #77 Luca Doncic</Jerseys>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Jerseys img={require('../../assets/icon_nets_front.jpg')} cost="R$ 479,90"> Nets #11 Kyrie Irving</Jerseys>
                </View>
           </ScrollView>    
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})