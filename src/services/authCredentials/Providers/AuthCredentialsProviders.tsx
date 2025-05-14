import React, {useEffect} from 'react';
import {createContext, useState} from 'react';

import {api} from '@api';
import {User} from '@domain';

import {authService} from '../../../domain/Auth/authService';
import {AuthCredentials} from '../../../domain/Auth/authTypes';
import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  userId: null,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  updateUser: () => {},
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

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials,
    });

    // remove listener when component unmount
    return interceptor;
  }, [authCredentials]);

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

  function updateUser(user: User) {
    if (authCredentials) {
      saveCredentials({...authCredentials, user});
    }
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  const userId = authCredentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        userId,
        saveCredentials,
        removeCredentials,
        updateUser,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );
        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
}
