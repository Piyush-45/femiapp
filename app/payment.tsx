import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Payment() {
  const router = useRouter()
  const { plan, amount } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: 'white', display:'flex',gap:20, alignItems:'center',paddingHorizontal:20 ,}}>
      <Text style={{fontSize:20, color:'#000000',fontWeight:'bold',marginTop:12}}>Payment Page for {plan} Plan</Text>
      <Text style={{fontSize:16, fontWeight:'semibold'}}>Type the contact you would like to pay with (256*******)</Text>
      <TextInput placeholder="Payment number" style={{borderColor:'#0EA9DE', borderWidth:1, textAlign:'center',width:'100%',fontSize:16,padding:8}} />
      <TouchableOpacity style={{backgroundColor:'#0EA9DE', borderRadius:10, padding:10,width:'100%'}} onPress={()=>router.push('premium')}>
        <Text style={{fontSize:16, color:'black',textAlign:'center', fontWeight:"bold" }}>Amount to pay: UGX.{amount}</Text>
      </TouchableOpacity>
      <Text style={{fontSize:16, textAlign:'center', marginTop:20}}>
        The incurring charges are not shown above and please input pin when prompted to (ZENGAPAY)
        The only available payment option is Mobile Money (Airtel or Mtn)
        Always cross check your checkout before placing your order please
      </Text>
    </View>
  );
}
