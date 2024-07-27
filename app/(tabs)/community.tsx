import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import anonprofile from "../../assets/images/anonprofile.png"

export default function App() {
  const QuestionCard = ({ username }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
      if (isLiked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setIsLiked(!isLiked);
    };

    return (
      <View style={styles.card}>
        <View style={styles.userInfo}>
          <Image source={anonprofile} style={styles.profileImage} />
          <View style={styles.userInfoText}>
            <Text style={styles.usernameText}>{username}</Text>
            <Text style={styles.spyUsernameText}>What is your spy Username</Text>
          </View>
        </View>
        <Text style={styles.questionText}>
          What are your favorite ways to relax and destress?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type your answer..."
          placeholderTextColor="#888"
        />
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
            <Ionicons 
              name={isLiked ? "heart" : "heart-outline"} 
              size={24} 
              color={isLiked ? "#E4258F" : "#888"} 
            />
            <Text style={styles.likeCount}>{likes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            We can connect and learn more from various past experiences and journeys
          </Text>
        </View>

        <TextInput 
          style={styles.mainInput} 
          placeholder='Your message here' 
          multiline
        />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {['John', 'Jane', 'Mike', 'Sarah'].map((username, index) => (
            <QuestionCard key={index} username={username} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    padding: 20,
    backgroundColor: '#E4258F',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  mainInput: {
    height: 105, 
    marginHorizontal: 15, 
    marginTop: 20, 
    textAlign: 'center', 
    borderWidth: 1, 
    borderColor: '#0EA9DE', 
    borderRadius: 5,
    padding: 10,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#0EA9DE',
    borderWidth: 1
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 47, 
    width: 47, 
    objectFit: 'contain'
  },
  userInfoText: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  spyUsernameText: {
    color: '#E4258F',
    fontSize: 14,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E4258F',
    borderRadius: 5,
    padding: 10,
    color: '#333',
    marginBottom: 10,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    color: '#888',
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    marginLeft: 5,
    color: '#888',
  },
});