import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { Header, Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Top Categories for Username</Text>
        <View style={styles.categories}>
          <CategoryButton title="Body Products" image={require('../../assets/images/bodyproductimage1.png')} />
          <CategoryButton title="Hair Products" image={require('../../assets/images/hairproduct.png')} />
        </View>
        
        <Text style={styles.sectionTitle}>Most Purchased</Text>
        <View style={styles.productRow}>
          <ProductCard />
          <ProductCard />
        </View>
        
        <Text style={styles.sectionTitle}>Essentials</Text>
        <View style={styles.productRow}>
          <ProductCard />
          <ProductCard />
        </View>
        
        <Text style={styles.sectionTitle}>Food Stuff</Text>
        <Text style={styles.emptyText}>Nothing found</Text>
        
        <Text style={styles.sectionTitle}>Recommended for Your Username</Text>
        <View style={styles.productRow}>
          <ProductCard />
          <ProductCard />
        </View>
        <View style={styles.productRow}>
          <ProductCard />
          <ProductCard />
        </View>
        <View style={styles.productRow}>
          <ProductCard />
        </View>
      </ScrollView>
      {/* <TabBar /> */}
    </SafeAreaView>
  );
};

const CategoryButton = ({ title, image }) => (
  <TouchableOpacity style={styles.categoryButton}>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categoryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ProductCard = () => (
  <View style={styles.productCard}>
    <View style={styles.productImagePlaceholder} />
    <Text style={styles.productName}>Product</Text>
    <Text style={styles.productDescription}>Description</Text>
    <Text style={styles.productPrice}>Price</Text>
    <TouchableOpacity style={styles.detailsButton}>
      <Text style={styles.detailsButtonText}>More details</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF69B4',
    borderBottomWidth: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#FFC0CB',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  detailsButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FF69B4',
    borderRadius: 5,
    padding: 5,
  },
  detailsButtonText: {
    color: '#FF69B4',
    fontSize: 12,
  },
  emptyText: {
    marginLeft: 15,
    color: '#666',
    fontStyle: 'italic',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default ShopScreen;