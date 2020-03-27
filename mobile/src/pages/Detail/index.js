import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Detail({ route, navigation }) {
  const { id } = route.params;
  
  const message = `Hello Green Peace, I am contacting you willing to help on the case "Amazon's Fire" with the amount of CA150.00`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Case's hero: Amazon Fire`,
      recipients: ['juliani.schlickmann@gmail.com'],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=17787513207&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>Green Peace</Text>

        <Text style={styles.incidentProperty}>CASE:</Text>
        <Text style={styles.incidentValue}>Amazon Fires</Text>

        <Text style={styles.incidentProperty}>AMOUNT:</Text>
        <Text style={styles.incidentValue}>CA1,200,00.00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be The Hero of this case.</Text>

        <Text style={styles.heroDescription}>Contact</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
