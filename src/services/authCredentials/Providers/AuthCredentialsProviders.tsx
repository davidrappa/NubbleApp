import React, {useEffect} from 'react';
import {createContext, useState} from 'react';

import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();

      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      //TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
