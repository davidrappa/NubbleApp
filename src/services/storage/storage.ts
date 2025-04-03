import {MMKVStorage} from './implementation/mmkvStorage';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage = MMKVStorage;

export function initializeStorage(storageImpl?: Storage) {
  storage = storageImpl || MMKVStorage;
}
