import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, EditPasswordParams, SignUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (err) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username: username});

  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email: email});
  return isAvailable;
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}
function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function requestNewPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(acAPI);
}

async function updatePassword(params: EditPasswordParams): Promise<string> {
  const {message} = await authApi.editPassword(params);
  return message;
}

export const authService = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  updateToken,
  removeToken,
  requestNewPassword,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
  updatePassword,
};
