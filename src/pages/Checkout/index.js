import React, { useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { buyList } from '../../buyList.js';

export default function Checkout(props) {
 const totalValue = []

 return (
   <View style={{backgroundColor: "#FFF", flex: 1}}>
       <ScrollView >
            {buyList.length > 0 ? buyList.map((value, key)=>{
                const[quantity, setQuantity] = useState(1);
                const itemValue = (quantity * parseFloat(buyList[key].cost.substring(2))).toFixed(2);
                totalValue.push(parseFloat(itemValue));
                console.log(totalValue)
                    return(
                        <View key={'container'+key}>
                            <View style={styles.container} >
                            <Image style={styles.image}source={buyList[key].imgPath}/>
                                <View>
                                    <TextInput
                                        style={{fontFamily: "Anton_400Regular"}}
                                        keyboardType="numeric"
                                        key={key}
                                        placeholder="1"
                                        onChangeText={(quantity)=>{setQuantity(quantity.replace(/[^0-9]/g, '')); totalValue.slice(key, 0, parseFloat(itemValue))}}
                                        value={quantity.toString()}
                                    ></TextInput>
                                    <Text style={{fontFamily: "Anton_400Regular"}}>R$ {buyList[key].cost.substring(2)}</Text>
                                    <TextInput placeholder={'R$' + itemValue} style={{fontFamily: "Anton_400Regular"}} editable={false}></TextInput>                                  
                                </View>                     
                            </View>
                            <View style={styles.line}/>
                        </View>
                    )
            })            
            :
            <Text style={styles.noItem}> Voce não tem produtos adicionados ainda! Volte para a lista e adicione alguns</Text>
            }
               
        </ScrollView>
        <View style={styles.container}> 
            <Text style={styles.text}>TOTAL R$ {parseFloat(totalValue.reduce((a, b) => a + b, 0)).toFixed(2)}</Text>
        </View>      
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: '2%',

    },
    line: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2,
        width: '100%',
        marginVertical: '2%'
    },
    noItem: {
        fontFamily: "Anton_400Regular",
        marginHorizontal: '5%'
    },
    image: {
        height: 250,
        width: 180
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%' 
      },
})