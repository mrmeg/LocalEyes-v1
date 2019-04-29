import { locationSchema } from '../database/models/location';

export const realmConfig = {
  path: 'LocalEyes.realm',
  schema: [locationSchema],
  schemaVersion: 0,
}