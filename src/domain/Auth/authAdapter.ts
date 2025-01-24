import {userAdapter} from '../User';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
    refreshToken: authCredentialsAPI.auth.refreshToken,
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
