import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/globalStyles';

export default function UserScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Message Sent:', { name, email, message });
    // Placeholder logic - you could integrate with email API or backend here
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/profile-placeholder.jpg')} style={styles.image} />
      
      <Text style={styles.sectionTitle}>CONTACT US</Text>
      <Text style={styles.descriptionBox}>
        We'd love to hear from you! Whether you have questions, feedback, or want to make reservations,
        feel free to get in touch.
      </Text>

      <Text style={styles.descriptionBox}>
        <Text style={{ fontWeight: 'bold' }}>VISIT US: </Text>
        123 Sakura Street, Cagayan De Oro, Philippines
      </Text>

      <View style={styles.aboutRow}>
        {/* Contact Info Cards */}
        <View style={{ width: '48%' }}>
          <View style={styles.strongTextBox}>
            <Text style={styles.strongText}>
              <Text style={{ fontWeight: 'bold' }}>CALL US</Text>{'\n'}
              We're available 9 AM - 9 PM PHT{'\n'}
              <Text onPress={() => Linking.openURL('tel:+639123456789')} style={{ textDecorationLine: 'underline' }}>
                +63 912 345 6789
              </Text>
            </Text>
          </View>
          
          <View style={[styles.strongTextBox, { marginTop: 10 }]}>
            <Text style={styles.strongText}>
              <Text style={{ fontWeight: 'bold' }}>EMAIL US</Text>{'\n'}
              For inquiries, reservations, or feedback:{'\n'}
              info@haru-bayan.ph
            </Text>
          </View>

          <View style={[styles.strongTextBox, { marginTop: 10 }]}>
            <Text style={styles.strongText}>
              <Text style={{ fontWeight: 'bold' }}>FOLLOW US</Text>{'\n'}
              Stay updated with the latest offerings and events on Facebook & Instagram
            </Text>
          </View>
        </View>

        {/* Contact Form */}
        <View style={{ width: '48%' }}>
        <Text style={[styles.strongTitle, { fontSize: 16, width: '100%', textAlign: 'center' }]}> CONTACT FORM </Text>
        
          <TextInput
            placeholder="Name"
            style={styles.contact_input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Email"
            style={styles.contact_input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Message"
            style={[styles.contact_input, { height: 100, textAlignVertical: 'top' }]}
            multiline
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}
