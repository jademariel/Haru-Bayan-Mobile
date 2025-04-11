import React, { useRef } from 'react';
import { ScrollView, Text, Image, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles'; // Make sure your styles are correct

const { width } = Dimensions.get('window');

const carouselItems = [
  {
    image: require('../assets/screen1.jpg'),
    caption: '"Bringing the heart of Japan to every Filipino plate—one authentic bite at a time."',
  },
  {
    image: require('../assets/screen2.jpg'),
    caption: '"Experience the rich taste of authentic Japanese cuisine."',
  },
];

const renderCarouselItem = ({ item }) => (
  <View style={styles.slide}>
    <Image source={item.image} style={styles.carouselImage} />
    <View style={styles.overlay} />
    <View style={styles.carouselContent}>
      <Text style={styles.carouselCaption}>{item.caption}</Text>
      <TouchableOpacity style={styles.orderNowBtn} onPress={() => console.log('Order Now pressed')}>
        <Text style={styles.orderNowText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// 👇 Add `navigation` to the props here
export default function HomeScreen({ navigation }) {
  const flatListRef = useRef();

  return (
    <ScrollView style={styles.container}>
      {/* 🖼️ Carousel */}
      <FlatList
        ref={flatListRef}
        data={carouselItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* 🍽️ Dine-In & Delivery Buttons */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.optionButton} 
          onPress={() => navigation.navigate('Menu')} // 👈 navigate to Menu
        >
          <Image source={require('../assets/dine.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>DINE IN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButton} 
          onPress={() => navigation.navigate('Menu')} // 👈 navigate to Menu
        >
          <Image source={require('../assets/delivery.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>DELIVERY</Text>
        </TouchableOpacity>
      </View>

      {/* 🧡 About Haru Bayan */}
      <View style={styles.strongTextBox}>
        <Text style={styles.strongText}>
          Haru Bayan is a technology-driven fusion of digital & Filipino-inspired dining culture,
          offering an immersive food experience through dine-in and delivery services.
        </Text>
      </View>

      {/* 🍣 Sushi Image */}
      <Image source={require('../assets/sushi.jpg')} style={styles.sushiImage} />
    </ScrollView>
  );
}
