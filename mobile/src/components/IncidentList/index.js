import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function IncidentList() {
  const navigation = useNavigation();
  
  function getDetail() {
    navigation.navigate('Detail')
  }

  return (
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
  );
}
