import ShadowTextInput from "@/components/my-components/ShadowTextInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback, GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";

import { EventRepository } from '../src/data/repositories/EventRepository';
import uuid from 'react-native-uuid';

export default function ModalScreen() {
  const [eventName, setEventName] = useState("");

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
    bottom: 120,
    width: "100%",
    padding: 16,
    backgroundColor: "#4d66af",
    borderRadius: 16,
  },
});
