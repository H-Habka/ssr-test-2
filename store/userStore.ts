import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserData {
  user: any;
  setUser: (payload: any) => void;
}

export const useUserStore = create<UserData>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (payload: any) => set({ user: payload }),
    }),
    {
      name: "userData",
    }
  )
);
