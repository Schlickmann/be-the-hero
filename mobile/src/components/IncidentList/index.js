import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { incidentsContext } from '../../contexts/IncidentsContext';
import api from '../../services/api';
import styles from './styles';

export default function IncidentList() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const { getRequest, getSuccess, getFailure, loading, total, page } = useContext(incidentsContext);

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    getRequest();
    
    try {
      const { data, headers } = await api.get('/incidents', {
        params: { page }
      });

      setIncidents([...incidents, ...data.incidents]);
      getSuccess(headers['x-total-count'], page + 1);
      
    } catch (error) {
      errorMessage();
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  async function refetchIncidents() {
    if (loading) return;

    getRequest();
    
    try {
      const { data, headers } = await api.get('/incidents', {
        params: { page: 1 }
      });

      setIncidents([...data.incidents]);
      getSuccess(headers['x-total-count'], page + 1);
      
    } catch (error) {
      errorMessage();
    }
  }

  function errorMessage() {
    getFailure();
    Alert.alert('Error', 'Something went wrong, please try again later');
  }
  
  function getDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <FlatList 
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        refreshing={loading}
        onRefresh={refetchIncidents}
        
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

            <TouchableOpacity style={styles.detailButton} onPress={() => getDetail(incident)}>
              <Text style={styles.detailButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
  );
}
