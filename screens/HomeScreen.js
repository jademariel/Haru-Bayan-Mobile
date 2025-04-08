import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import OptionButton from '../components/OptionButton';
import styles from '../styles/globalStyles';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/food.jpg')} style={styles.headerImage} />
      <Text style={styles.tagline}>"Bringing the heart of Asia in every Filipino dish"</Text>

      <View style={styles.optionsContainer}>
        <OptionButton icon="restaurant" label="DINE IN" />
        <OptionButton icon="bicycle" label="DELIVERY" />
      </View>

      <Text style={styles.description}>
        Haru Bayan is a technology-driven fusion of digital & Filipino-inspired dining culture,
        offering an immersive food experience through dine-in and delivery services.
      </Text>

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
            { name: 'Amar, Rianson R.', role: 'LEADER' },
            { name: 'Plazos, Jade Mariel', role: '' },
            { name: 'Sarsoza, Kristal A.', role: '' },
            { name: 'Yburan, Christine Jane', role: '' },
          ].map((member, index) => (
            <View key={index} style={styles.teamCard}>
              <Image source={require('../assets/profile-placeholder.jpg')} style={styles.teamImage} />
              <Text style={styles.memberName}>{member.name}</Text>
              {member.role ? <Text style={styles.memberRole}>{member.role}</Text> : null}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
