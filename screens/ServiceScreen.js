import React, { useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/globalStyles';

export default function ServiceScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert(`Message sent!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <ScrollView style={styles.container}>

      {/* 🍱 WHO ARE WE */}
      <View style={styles.aboutRow}>
        <Image source={require('../assets/whoarewe.jpg')} style={styles.aboutImage} />
        <View style={styles.aboutTextBox}>
          <Text style={styles.sectionTitle}>Who Are We</Text>
          <Text style={styles.description}>
            We, the founders of Haru-Bayan, a restaurant in Cagayan De Oro, aim to share the joy of authentic
            Japanese flavors with the local community. With a passion for traditional culinary techniques,
            we proudly create sushi, ramen, tempura, and donburi — ensuring every dish captures the
            true essence of Japan.
          </Text>
        </View>
      </View>

      <View style={styles.separatorLine} />

      {/* 💪 TOGETHER WE ARE STRONG */}
      <View style={styles.strongWrapper}>
        <View style={styles.strongRow}>
          <Text style={styles.strongTitle}>Together We{"\n"}Are Strong</Text>
          <View style={styles.strongTextBox}>
            <Text style={styles.strongText}>
              Our team at Haru-Bayan is the heart of everything we do. Each staff member brings dedication,
              skill, and passion to ensure the best dining experience for our customers. From our expert chefs
              crafting authentic Japanese dishes to our friendly servers ensuring warm hospitality, we work
              together to deliver excellence.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.separatorLine} />

      {/* 📊 STATS */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5+</Text>
          <Text style={styles.statLabel}>Years of Service</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>95%</Text>
          <Text style={styles.statLabel}>Customer Satisfaction</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>20k+</Text>
          <Text style={styles.statLabel}>Bowls Served</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10k+</Text>
          <Text style={styles.statLabel}>Happy Customers</Text>
        </View>
      </View>

      <View style={styles.separatorLine} />

      {/* 📞 CONTACT US */}
      <View style={{ flexDirection: 'row', marginTop: 20, flexWrap: 'wrap' }}>
        {/* Left Side: Image */}
        <View style={{ width: '45%' }}>
          <Image 
            source={require('../assets/call.png')} 
            style={{ width: '100%', height: 180, borderRadius: 10 }} 
            resizeMode="cover" 
          />
        </View>

        {/* Right Side: Contact Info */}
        <View style={{ width: '55%', paddingLeft: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>CONTACT US</Text>
          <Text style={{ marginVertical: 5 }}>
            We'd love to hear from you! Whether you have questions, feedback, or just want to share your experience, feel free to reach out.
          </Text>

          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>VISIT US</Text>
          <Text>123 Sakura Street, Cagayan de Oro City, Misamis Oriental, Philippines</Text>
        </View>
      </View>

      {/* Contact Info Cards + Form */}
      <View style={styles.contactContainer}>
        <View style={styles.contactLeft}>
          <View style={styles.contactCard}>
            <Text style={styles.contactCardTitle}>CALL US</Text>
            <Text>We're available from 9 AM to 9 PM PHT</Text>
            <Text style={styles.contactLink} onPress={() => Linking.openURL('tel:+63881234567')}>
              +63 88 123 4567
            </Text>
          </View>

          <View style={styles.contactCard}>
            <Text style={styles.contactCardTitle}>EMAIL US</Text>
            <Text>For inquiries, reservations, or feedback, send us at</Text>
            <Text style={styles.contactLink} onPress={() => Linking.openURL('mailto:info@hana-bayan.ph')}>
              info@hana-bayan.ph
            </Text>
          </View>

          <View style={styles.contactCard}>
            <Text style={styles.contactCardTitle}>FOLLOW US</Text>
            <Text>Stay updated with our latest offerings and events</Text>
            <Text style={styles.contactLink} onPress={() => Linking.openURL('https://facebook.com')}>
              Facebook & Instagram
            </Text>
          </View>
        </View>

        <View style={styles.contactRight}>
          <Text style={styles.contactFormTitle}>CONTACT FORM</Text>
          <TextInput placeholder="Name" style={styles.contactInput} value={name} onChangeText={setName} />
          <TextInput placeholder="Email" style={styles.contactInput} value={email} onChangeText={setEmail} />
          <TextInput placeholder="Message" multiline numberOfLines={4} style={styles.contactInput} value={message} onChangeText={setMessage} />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separatorLine} />

      {/* 👩‍💻 Meet Our IT Department */}
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
