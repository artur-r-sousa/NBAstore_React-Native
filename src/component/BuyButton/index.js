import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { buyList } from '../../buyList.js';

export default function BuyButton(props) {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btnContainer} 
        onPress={()=>{
            if(buyList.includes(props.addToList)) {
                alert('Produto ja existe no seu carrinho')
            } else {
                buyList.push(props.addToList);
                alert(props.addToList.title + " adicionado ao carrinho")
            }
        }}>
            <Text style={styles.title}>COMPRAR</Text>
       </TouchableOpacity>
       
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        color: '#FFF'
    }
})