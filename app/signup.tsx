import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import downarrow from "../assets/images/downarrow.png"
import { TouchableOpacity } from 'react-native'
import googleIcon from "../assets/images/googleIcon.png"
import appleicons from "../assets/images/appleicon.png"
import { useRouter } from 'expo-router'

const OptionSelector = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.optionContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption
          ]}
          onPress={() => onSelect(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const signup = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 34, display: 'flex', paddingVertical: 17 }}>

      <KeyboardAvoidingView >
        <ScrollView showsVerticalScrollIndicator={false} >
          <View>
            <Image source={logo} style={{ height: 66, width: 65, objectFit: 'contain', alignSelf: 'center' }} />
            <Text style={{ color: '#E4258F', fontSize: 32, textAlign: 'center', fontWeight: 'bold', marginTop: 23 }}>Signup</Text>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' ,}}>
              <Text style={{ fontSize: 14, marginTop: 12, }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push('login')} >
                <Text style={{ color: '#E4258F',fontWeight:'bold' }}> Login here</Text>
              </TouchableOpacity>
            </View>

            <View style={{ display: 'flex', gap: 6, marginTop: 16 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name</Text>
              <TextInput placeholder='Enter your name' style={{ borderColor: '#1E1E1E', borderWidth: 1, paddingHorizontal: 13, paddingVertical: 10, fontSize: 16 }} />
            </View>

            <View style={{ display: 'flex', gap: 6, marginTop: 16 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Email Address</Text>
              <TextInput placeholder='Enter your Email address' keyboardType='email-address' style={{ borderColor: '#1E1E1E', borderWidth: 1, paddingHorizontal: 13, paddingVertical: 10, fontSize: 16 }} />
            </View>

            <View style={{ display: 'flex', gap: 6, marginTop: 16 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Phone Number</Text>
              <TextInput placeholder='Enter your Phone Number' keyboardType='number-pad' style={{ borderColor: '#1E1E1E', borderWidth: 1, paddingHorizontal: 13, paddingVertical: 10, fontSize: 16 }} />
            </View>

            <View style={{ display: 'flex', gap: 6, marginTop: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Current Stage</Text>
            <OptionSelector 
              options={['Pregnant', 'Not Pregnant']}
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
            />
          </View>

          </View>

          {/* buttons */}
          <TouchableOpacity style={{ borderColor: '#E4258F', borderWidth: 2, marginTop: 30, paddingHorizontal: 56, paddingVertical: 9, borderRadius: 5, }}>
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textAlign: 'center' }}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderColor: '#E4258F', borderWidth: 2, marginTop: 30, paddingHorizontal: 26, paddingVertical: 9, borderRadius: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={googleIcon} style={{
              width: 32, height: 32, objectFit: 'cover'
            }} />
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textAlign: 'center' }}>Continue with Google </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderColor: '#E4258F', borderWidth: 2, marginTop: 30, paddingHorizontal: 26, paddingVertical: 9, borderRadius: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={appleicons} style={{ width: 32, height: 32, objectFit: 'cover' }} />
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, }}>Continue with Apple</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 13, textAlign: 'center' }}>
            By creating an account, you agree to our Privacy Policy & Terms and Conditions
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({
  // ... (existing styles)
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#FFC0CB',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  selectedOption: {
    backgroundColor: '#E4258F',
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})