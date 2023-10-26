import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App({route}) {
  const [quantity, setQuantity] = useState(1)
  const [sumPrice, setSumPrice] = useState(route.params.price)
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '50%' }}>
        <Image style={{ width: '100%', height: '100%' }} resizeMode='contain' source={require('../assets/iphone15prm.png')}></Image>
      </View>
      <View style={{ alignItems: 'flex-start', width: '100%' ,height:'50%',justifyContent:'space-around'}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{route.params.name}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Price: {route.params.price}$</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Quantity: {quantity}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Sum Price : {sumPrice}</Text>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
          <Pressable onPress={()=> {
            if(quantity>1){
              setQuantity(quantity-1)
              setSumPrice(sumPrice-route.params.price)
            }
          }} style={{width:150,height:50,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Giảm</Text>
          </Pressable>
          <Pressable onPress={()=> {
            setQuantity(quantity+1)
            setSumPrice(sumPrice+route.params.price)
          }} style={{width:150,height:50,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Tăng</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
