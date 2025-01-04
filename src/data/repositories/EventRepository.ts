import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event } from '@/src/domain/models/Event';
import { EventEntity } from '@/src/data/entities/EventEntity';
import { EventMapper } from '@/src/data/mappers/EventMapper';

const EVENTS_STORAGE_KEY = '@events';

export const EventRepository = {
  saveEvents: async (events: Event[]) => {
    // Carregar eventos existentes no AsyncStorage
    const existingJsonValue = await AsyncStorage.getItem(EVENTS_STORAGE_KEY);
    const existingEntities: EventEntity[] = existingJsonValue ? JSON.parse(existingJsonValue) : [];
  
    // Mapear os novos eventos e adicioná-los à lista existente
    const newEntities = events.map(EventMapper.toEntity);
    const updatedEntities = [...existingEntities, ...newEntities];
  
    // Salvar a lista atualizada de eventos no AsyncStorage
    const updatedJsonValue = JSON.stringify(updatedEntities);
    await AsyncStorage.setItem(EVENTS_STORAGE_KEY, updatedJsonValue);
  },

  loadEvents: async (): Promise<Event[]> => {
    const jsonValue = await AsyncStorage.getItem(EVENTS_STORAGE_KEY);
    if (!jsonValue) return [];
    const entities: EventEntity[] = JSON.parse(jsonValue);
    return entities.map(EventMapper.toDomain);
  },
};