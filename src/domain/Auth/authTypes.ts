import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    token: string;
    type: string;
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
