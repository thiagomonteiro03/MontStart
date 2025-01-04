import { Event } from '@/src/domain/models/Event';
import { EventEntity } from '@/src/data/entities/EventEntity';

export const EventMapper = {
  toEntity: (event: Event): EventEntity => ({
    id: event.id,
    name: event.name,
    date: event.date.toISOString(),
  }),
  toDomain: (entity: EventEntity): Event => ({
    id: entity.id,
    name: entity.name,
    date: new Date(entity.date),
  }),
};