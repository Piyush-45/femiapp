import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import calender from "../../assets/images/calender.png";
import femistore from "../../assets/images/femistore.png";
import moreHome from "../../assets/images/morehome.png";
import communityHome from "../../assets/images/communityHome.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import { useRouter } from 'expo-router';

// Get the screen width
const screenWidth = Dimensions.get('window').width;
// Set card width to be half of the screen width minus some padding/margin
const cardWidth = (screenWidth - 60) / 2; // Adjusted for padding and margin

const home = () => {
  const router = useRouter()

  const cardsData = [
    { image: calender, heading: 'My Calendar', desc: 'Track your period' },
    { image: femistore, heading: 'FemiHub Store', desc: 'Best for you' },
    { image: communityHome, heading: 'Community', desc: 'Share Your Thoughts' },
    { image: moreHome, heading: 'More', desc: 'Dont be left out' },
  ];
  const blogData = [
    { image: blog1, heading: "Women's health: Tips for staying healthy at any age", desc: 'Women’s health is important at all ages' },
    { image: blog2, heading: 'Motherhood: Tips for taking care of yourself and your family', desc: 'Motherhood is a rewarding experience, but it can also be challenging' },
    { image: blog3, heading: 'Pregnancy and nutrition', desc: 'What to eat and avoid' },
  ]
  const renderCard = ({ item }) => (
    <TouchableOpacity>
      <View style={[styles.cardContainer, { width: cardWidth }]}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardHeading}>{item.heading}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.dailyTip}>DAILY TIP</Text>
          <Text style={styles.username}>Crafted for you Username</Text>
          <Text style={styles.tipTitle}>How to Boost Your Fertility</Text>
          <Text style={styles.tipDesc}>
            Exercise is a great way to improve your overall health and fertility. Aim for at least 30 minutes of moderate...
          </Text>
        </View>

        <View style={styles.cardsSection}>
          <Text style={styles.sectionTitle}>Essentials for amazing women like you</Text>
          <FlatList
      
            data={cardsData}
            renderItem={renderCard}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={styles.flatListContainer}
            columnWrapperStyle={styles.columnWrapper}
            scrollEnabled={false} // Disable scrolling for FlatList
          />
        </View>

        {/* blogs section */}
        <View style={{ gap: 20 }}>
          {blogData.map((item, index) => {
            return (
              <TouchableOpacity>
                <View key={index} style={{
                  borderWidth: 2,
                  borderColor: '#E4258F', display: 'flex', alignItems: 'center', gap: 6,
                  borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5
                }} >
                  <Image source={item.image} style={{ objectFit: 'cover', width: '90%' }} />
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{item.heading}</Text>
                  <Text style={{ color: '#00000099', fontSize: 13, textAlign: 'center' }}>{item.desc}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    display: 'flex',
    gap: 4,
    // alignItems: 'center',
  },
  dailyTip: {
    color: '#E4258F',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username: {
    color: '#00000099',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipTitle: {
    color: '#00000099',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tipDesc: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  cardsSection: {
    marginTop: 26,
  },
  sectionTitle: {
    color: '#E4258F',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#E4258F',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 86,
    resizeMode: 'cover',
  },
  cardHeading: {
    color: '#00000099',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  cardDesc: {
    color: '#00000099',
    textAlign: 'center',
  },
});
