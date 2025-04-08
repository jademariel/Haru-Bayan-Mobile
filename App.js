import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/food.jpg')} style={styles.headerImage} />
      <Text style={styles.tagline}>"Bringing the heart of Asia in every Filipino dish"</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="restaurant" size={40} color="white" />
          <Text style={styles.optionText}>DINE IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="bicycle" size={40} color="white" />
          <Text style={styles.optionText}>DELIVERY</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Haru Bayan is a technology-driven fusion of digital & Filipino-inspired dining culture,
        offering an immersive food experience through dine-in and delivery services.
      </Text>
      <Image source={require('./assets/sushi.jpg')} style={styles.image} />
    </ScrollView>
  );
};

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>WHO ARE WE</Text>
      <Text style={styles.description}>
        We are a team dedicated to preserving Filipino culinary traditions while embracing modern
        technology. Together, we bring the best food experience to your doorstep.
      </Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>5+ Years</Text>
        <Text style={styles.stat}>95% Satisfaction</Text>
        <Text style={styles.stat}>20k+ Orders</Text>
        <Text style={styles.stat}>10k+ Customers</Text>
      </View>
      <Text style={styles.header}>Meet Our IT Department Team</Text>
      <View style={styles.teamContainer}>
        {[1, 2, 3, 4].map((i) => (
          <View key={i} style={styles.teamCard}>
            <Image source={require('./assets/profile-placeholder.jpg')} style={styles.teamImage} />
            <Text style={styles.optionText}>Member {i}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'About') iconName = 'information-circle';
            else if (route.name === 'Cart') iconName = 'cart';
            else if (route.name === 'Favorites') iconName = 'heart';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8B0000',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  tagline: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  optionButton: {
    backgroundColor: '#8B0000',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    marginTop: 5,
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  stat: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  teamCard: {
    alignItems: 'center',
    margin: 10,
  },
  teamImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
});
