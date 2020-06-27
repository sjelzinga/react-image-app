import axios, { AxiosInstance } from "axios";

export const baseURL = "https://api.unsplash.com/";

export const axiosClient: AxiosInstance = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    AcceptVersion: "v1",
    Accept: "application/json",
    Authorization: `Client-ID PV9-3jNiKAZeG_C5837xJbC98xpEiDYQK7e5ZBnwVSc`,
  },
});
