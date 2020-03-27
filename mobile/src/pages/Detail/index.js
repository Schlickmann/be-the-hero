import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Detail({ route, navigation }) {
  const { incident } = route.params;
  const amount = Intl.NumberFormat('en', { 
                    style: 'currency', 
                    currency: 'CAD' 
                  }).format(incident.value);
  
  const message = `Hello ${incident.name}, I am contacting you willing to help on the case "${incident.title}" with the amount of ${amount}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Case's hero: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.wrapper}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.incident}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
          <Text style={styles.incidentValue}>{incident.name} from {incident.city}, {incident.state} - {incident.country}</Text>

          <Text style={styles.incidentProperty}>CASE:</Text>
          <Text style={styles.incidentValue}>{incident.title}</Text>

          <Text style={styles.incidentProperty}>DESCRIPTION:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>

          <Text style={styles.incidentProperty}>AMOUNT:</Text>
          <Text style={styles.incidentValue}>{amount}</Text>
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
      </ScrollView>
    </View>
  );
}
