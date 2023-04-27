import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (path: string) => {
  const response = await api.get(path);
  return response.data;
};

type Credentials = {
  username: string;
  email: string;
  password: string;
};

export const signUp = async (
  path: string,
  { username, email, password }: Credentials
) => {
  const response = await api.post(path, { username, email, password });
  return response.data;
};

export const signIn = async (
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
