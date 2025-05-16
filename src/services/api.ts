import axios from 'axios';
import { ApiResponse, SiteContent } from '../types';

const api = axios.create({
  baseURL: 'https://api-site.enderdevelopment.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHomeContent = async (lang: string): Promise<ApiResponse<SiteContent>> => {
  const response = await api.get(`/${lang}/home`);
  return response.data;
};

export const getServicesContent = async (lang: string): Promise<ApiResponse<SiteContent['services']>> => {
  const response = await api.get(`/${lang}/services`);
  return response.data;
};

export const getAboutContent = async (lang: string): Promise<ApiResponse<SiteContent['about']>> => {
  const response = await api.get(`/${lang}/about`);
  return response.data;
};

export const getProjectsContent = async (lang: string): Promise<ApiResponse<SiteContent['projects']>> => {
  const response = await api.get(`/${lang}/projects`);
  return response.data;
};

export const getBlogContent = async (lang: string): Promise<ApiResponse<SiteContent['blog']>> => {
  const response = await api.get(`/${lang}/blog`);
  return response.data;
};

export const getContactContent = async (lang: string): Promise<ApiResponse<SiteContent['contact']>> => {
  const response = await api.get(`/${lang}/contact`);
  return response.data;
};

// Auth endpoints
export const login = async (username: string, password: string): Promise<ApiResponse<{ token: string }>> => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const verifyToken = async (token: string): Promise<ApiResponse<boolean>> => {
  const response = await api.post('/auth/verify', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Admin API endpoints
export const updateContent = async (
  section: string,
  lang: string,
  content: Partial<SiteContent>,
  token: string
): Promise<ApiResponse<void>> => {
  const response = await api.put(
    `/${lang}/${section}`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const uploadImage = async (
  file: File,
  token: string
): Promise<ApiResponse<{ url: string }>> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};