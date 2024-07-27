import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'

const PasswordlessSignin = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, }} >
      <View style={{ paddingHorizontal: 24}}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}>
            My
          </Text>
          <Text style={{ color: '#E4258F', fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}>FemiHub</Text>
        </View>
        <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 25 }}>Remember, this action is only possible if your email is logged in the device’s mail app, otherwise ,</Text> 
        <TouchableOpacity  onPress={()=>router.push('signup')}><Text style={{ color: '#E4258F', fontSize: 14,textAlign:'center' }}>Create Account</Text>
        </TouchableOpacity>

        <View style={{ display: 'flex', gap: 6, marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Email Address</Text>
          <TextInput placeholder='Enter your email' style={{ borderColor: '#1E1E1E', borderWidth: 1, paddingHorizontal: 13, paddingVertical: 10, fontSize: 16, marginTop: 15 }} />
        </View>

        <TouchableOpacity style={{ borderColor: '#E4258F', borderWidth: 2, marginTop: 30, paddingHorizontal: 56, paddingVertical: 9, borderRadius: 5,  }} onPress={()=>router.push('verifycode')}>
          <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textAlign: 'center' }}>Submit</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default PasswordlessSignin

const styles = StyleSheet.create({})