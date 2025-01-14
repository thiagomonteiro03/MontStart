import { StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Event } from '../../src/domain/models/Event';
import { EventRepository } from '../../src/data/repositories/EventRepository';
import FabButton from '@/components/buttons/FabButton';


export default function TabTwoScreen() {
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    const fetchedEvents = await EventRepository.loadEvents();
    setEvents(fetchedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useFocusEffect(() => {
    fetchEvents();
  });

  return (
    <ThemedView style={styles.container}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Events</ThemedText>
      </ThemedView>

      <ThemedView>
        <FlatList
          data={events}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ThemedText>{`${item.name}`}</ThemedText>
          )}
        />

      </ThemedView>

      <FabButton 
      style={{bottom: 180, right: 60}}
      action={ ()=> router.push('/modal') }
      />
      
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 25,
    paddingTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
