import axios from "axios";

const vikinger = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 20000,
});

export const api = {
  auth: {
    register: (body: any) => {
      return vikinger.post("/api/auth/signup", body);
    },
    login: (body: any) => {
      return vikinger.post("/api/auth/login", body);
    },
    me: () => {
      return vikinger.get("/api/me");
    },
  },
};
