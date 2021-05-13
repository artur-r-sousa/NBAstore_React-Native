import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Jerseys(props) {
    const navigation = useNavigation();

    function filterDesc(desc){
        if(desc.length < 27) {
            return desc
        } 
        return `${desc.substring(0, 23)}...`
    }

 return (
   <TouchableOpacity style={styles.container} onPress={()=> {navigation.navigate('Detail')}}>
       <Image
        source={props.img}
        style={StyleSheet.jerseyImg}
       />

       <Text style={styles.jerseyText}>
           {filterDesc(props.children)}
       </Text>

       <View opacity={0.4}>
        <Text style={styles.jerseyText}>{props.cost}</Text>
       </View>

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    jerseyImg: {
        width: 175,
        height: 175,

    },
    jerseyText: {
        fontSize: 16
    }
})