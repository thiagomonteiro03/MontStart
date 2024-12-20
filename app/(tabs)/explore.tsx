import { StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FabButton from '@/components/buttons/FabButton';

export default function TabTwoScreen() {
  const router = useRouter()
  const [showAddEventModal, setAddEventModal] = useState<boolean>(false);

  return (
    <ThemedView style={styles.container}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Events</ThemedText>
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
