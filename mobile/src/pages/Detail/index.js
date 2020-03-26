import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Detail({ navigation }) {

  function backToIncidents() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={backToIncidents}>
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
          <TouchableOpacity style={styles.action} onPress={() => false}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => false}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
