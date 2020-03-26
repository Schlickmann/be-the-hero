import React from 'react';
import { View, Text, Image } from 'react-native';

import IncidentList from '../../components/IncidentList';
import logo from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>0 cases</Text>
        </Text>
      </View>

      <Text style={styles.title}>
        Welcome!  
      </Text>
      <Text style={styles.description}>
        Pick one or more cases below and save the day. 
      </Text>

      <IncidentList />
    </View>
  );
}
