import axios from "axios";
import { API_BASE_URL } from "./Constants/Constants";

export const instance = axios.create({
  baseURL: API_BASE_URL,
});
export default axios;
