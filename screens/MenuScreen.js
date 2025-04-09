import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';

const categories = [
  { title: 'MAIN DISH', image: require('../assets/foodmenu/chickenteriyaki.jpg') },
  { title: 'NOODLES', image: require('../assets/foodmenu/soba.jpg') },
  { title: 'RICE DISHES', image: require('../assets/foodmenu/donburi.jpg') },
  { title: 'SOUPS & STEWS', image: require('../assets/foodmenu/miso-soup.jpg') },
  { title: 'SIDE DISHES', image: require('../assets/foodmenu/teriyaki-tofu.jpg') },
  { title: 'APPETIZERS', image: require('../assets/foodmenu/futomaki.jpg') },
  { title: 'STREET FOOD & SNACKS', image: require('../assets/foodmenu/takoyaki.jpg') },
  { title: 'DESSERTS & SWEETS', image: require('../assets/foodmenu/dango.jpg') },
  { title: 'BEVERAGES', image: require('../assets/foodmenu/melonsoda.jpg') },
];

const MenuScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <Image
        source={require('../assets/menubanner.jpg')}
        style={styles.banner}
        resizeMode="cover"
      />
      <Text style={styles.header}>HARU BAYAN'S MENU</Text>
      <Text style={styles.subHeader}>Pick your favorite category</Text>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Category Grid */}
      <View style={styles.grid}>
        {filteredCategories.map((cat, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={cat.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{cat.title}</Text>
            <Text style={styles.cardSubtitle}>View all menus</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 180,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    width: '30%',
    margin: '1.5%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 70,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 10,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default MenuScreen;
