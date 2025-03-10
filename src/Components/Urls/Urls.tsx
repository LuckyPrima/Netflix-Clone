import { API_KEY, API_BASE_URL } from "@/Constants/Constants";

export const originals = `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
