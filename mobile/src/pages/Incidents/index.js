import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Incidents({ navigation }) {

  function getDetail() {
    navigation.navigate('Detail')
  }
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

      <FlatList 
        style={styles.incidentList}
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>Green Peace</Text>

            <Text style={styles.incidentProperty}>CASE:</Text>
            <Text style={styles.incidentValue}>Amazon Fires</Text>

            <Text style={styles.incidentProperty}>AMOUNT:</Text>
            <Text style={styles.incidentValue}>CA1,200,00.00</Text>

            <TouchableOpacity style={styles.detailButton} onPress={getDetail}>
              <Text style={styles.detailButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
