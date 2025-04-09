import React, { useRef } from 'react';
import { ScrollView, Text, Image, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import OptionButton from '../components/OptionButton';
import styles from '../styles/globalStyles';

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

    {/* Overlay for darker effect */}
    <View style={styles.overlay} />

    <View style={styles.carouselContent}>
      <Text style={styles.carouselCaption}>{item.caption}</Text>
      <TouchableOpacity style={styles.orderNowBtn} onPress={() => console.log('Order Now pressed')}>
        <Text style={styles.orderNowText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function HomeScreen() {
  const flatListRef = useRef();

  return (
    <ScrollView style={styles.container}>
      {/* Carousel */}
      <FlatList
        ref={flatListRef}
        data={carouselItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Buttons */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Image source={require('../assets/dine.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>DINE IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Image source={require('../assets/delivery.png')} style={styles.optionImage} />
          <Text style={styles.optionText}>DELIVERY</Text>
        </TouchableOpacity>
      </View>

      {/* About Haru Bayan */}
      <View style={styles.strongTextBox}>
        <Text style={styles.strongText}>
          Haru Bayan is a technology-driven fusion of digital & Filipino-inspired dining culture,
          offering an immersive food experience through dine-in and delivery services.
        </Text>
      </View>

      <Image source={require('../assets/sushi.jpg')} style={styles.image} />

      {/* WHO ARE WE Section */}
      <View style={styles.aboutRow}>
        <Image source={require('../assets/sushi.jpg')} style={styles.aboutImage} />
        <View style={styles.aboutTextBox}>
          <Text style={styles.sectionTitle}>WHO ARE WE</Text>
          <Text style={styles.description}>
            We, the founders of Haru-Bayan, a restaurant in Cagayan De Oro, aim to share the joy of authentic
            Japanese flavors to the local community. With a passion for traditional culinary techniques,
            we proudly create sushi, ramen, tempura, and donburi, ensuring every dish captures the
            true essence of Japan.
          </Text>
        </View>
      </View>

      {/* Together We Are Strong Section */}
      <View style={styles.strongSection}>
        <Text style={styles.strongTitle}>Together We{"\n"}Are Strong</Text>
        <View style={styles.strongTextBox}>
          <Text style={styles.strongText}>
            Our team at Haru-Bayan is the heart of everything we do. Each staff member brings dedication,
            skill, and passion to ensure the best dining experience for our customers. From our expert chefs
            crafting authentic Japanese dishes to our friendly servers ensuring warm hospitality, we work
            together to deliver excellence. With combined knowledge, creativity, and customer satisfaction,
            making every visit to Haru-Bayan memorable.
          </Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5+</Text>
          <Text style={styles.statLabel}>Years</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>95%</Text>
          <Text style={styles.statLabel}>Customer Satisfaction</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>20k+</Text>
          <Text style={styles.statLabel}>Past Orders</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10k+</Text>
          <Text style={styles.statLabel}>Loyal Customers</Text>
        </View>
      </View>

      {/* IT Department Team */}
      <View style={styles.teamSection}>
        <Text style={styles.ITteam}>Meet Our IT Department Team</Text>
          <View style={styles.teamContainer}>
        {[
            { name: 'Amar, Rianson R.', role: 'LEADER', image: require('../assets/team/amar.png') },
            { name: 'Plazos, Jade Mariel', role: '', image: require('../assets/team/jade.jpg') },
            { name: 'Sarsoza, Kristal A.', role: '', image: require('../assets/team/kristal.jpg') },
            { name: 'Yburan, Christine Jane', role: '', image: require('../assets/team/christine.jpg') },
        ].map((member, index) => (
      <View key={index} style={styles.teamCard}>
        <Image source={member.image} style={styles.teamImage} />
        <Text style={styles.memberName}>{member.name}</Text>
        {member.role ? <Text style={styles.memberRole}>{member.role}</Text> : null}
      </View>
    ))}
  </View>
</View>

    </ScrollView>
  );
}
