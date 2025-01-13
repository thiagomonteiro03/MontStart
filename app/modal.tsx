import ShadowTextInput from "@/components/text-inputs/ShadowTextInput";
import SimpleTextInput from "@/components/text-inputs/SimpleTextInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Button, Platform } from "react-native";
import { TouchableWithoutFeedback, GestureHandlerRootView } from "react-native-gesture-handler";

import { router } from "expo-router";

import { EventRepository } from '../src/data/repositories/EventRepository';
import uuid from 'react-native-uuid';
import RNDateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function ModalScreen() {
  const [eventName, setEventName] = useState("");

  const [date, setDate] = useState(new Date());  // Initialize with the current time

  const onChange = (event: any, selectedDate?: Date) => {
    setDate(selectedDate || date);  // Update time state when a new time is selected
  };
  const showMode = (currentMode: string) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <TouchableWithoutFeedback
        onPress={router.back}>
          <MaterialIcons
            paddingBottom={24}
            alignSelf="flex-end"
            name="close"
            size={32}
            color="gray"
          />
        </TouchableWithoutFeedback>

        <ThemedView style={styles.headerContainer}>
          <ThemedText type="title" lightColor="#4d66af">
            Adicionar Evento
          </ThemedText>

          <ShadowTextInput
            value={eventName}
            onChangeText={setEventName}
            placeholder="Nome do evento"
          />

          <SimpleTextInput
            value={eventName}
            onChangeText={setEventName}
            placeholder="Nome do evento"
          />

          {
            Platform.OS === "ios"?(
              <RNDateTimePicker
                value={date}
                mode={'date'} 
                onChange={onChange} 
              />
            ): (
              <ThemedView>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />
                <ThemedText>selected: {date.toLocaleString()}</ThemedText>
              </ThemedView>
            )
          }




          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={ async (event) => {
              await EventRepository.saveEvents([
                  {
                    id: uuid.v4(),
                    name: eventName,
                    date: new Date(),
                  }
                ]);
                router.back();
            }
            }
            >
            <ThemedText style={styles.textContainer}>Salvar</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    padding: 16,
    backgroundColor: "#4d66af",
    borderRadius: 16,
  },
});
