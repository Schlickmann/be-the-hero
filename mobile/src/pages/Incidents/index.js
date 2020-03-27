import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { incidentsContext } from '../../contexts/IncidentsContext';
import IncidentList from '../../components/IncidentList';
import logo from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const { total } = useContext(incidentsContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} cases</Text>
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
