import axios from 'axios';

import { Markup, Credentials } from '@/types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (path: string) => {
  const response = await api.get(path, {
    withCredentials: true,
  });
  return response.data;
};

export const createMarkup = async (
  path: string,
  body: Omit<Markup, 'id' | 'userId'>
) => {
  const response = await api.post(path, body, {
    withCredentials: true,
  });
  return response.data;
};

export const signup = async (
  path: string,
  { username, email, password }: Credentials
) => {
  const response = await api.post(path, { username, email, password });
  return response.data;
};

export const login = async (
  path: string,
  { email, password }: Omit<Credentials, 'username'>
) => {
  const response = await api.post(
    path,
    { email, password },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const checkSession = async (path: string) => {
  const response = await api.get(path, {
    withCredentials: true,
  });
  return response.data;
};

export const removeSession = async (path: string) => {
  const response = await api.get(path, {
    withCredentials: true,
  });
  return response.data;
};
