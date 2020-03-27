import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { incidentsContext, Types } from '../../contexts/IncidentsContext';
import api from '../../services/api';
import styles from './styles';

export default function IncidentList() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const { dispatch } = useContext(incidentsContext);

  useEffect(() => {
    async function loadIncidents() {
      try {
        const { data, headers } = await api.get('/incidents');

        setIncidents(data.incidents);

        dispatch({ type: Types.ON_TOTAL_CHANGE, payload: { total: headers['x-total-count'] }});
      } catch (error) {
        Alert.alert('Error', 'Something went wrong, please try again later');
      }
    }

    loadIncidents();
  }, []);
  
  function getDetail(id) {
    navigation.navigate('Detail', { id });
  }

  return (
    <FlatList 
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item : incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASE:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>AMOUNT:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('en', { 
                style: 'currency', 
                currency: 'CAD' 
              }).format(incident.value)}
            </Text>

            <TouchableOpacity style={styles.detailButton} onPress={() => getDetail(incident.id)}>
              <Text style={styles.detailButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
  );
}
