import { create } from "zustand";
import { isAuthenticated } from "../api/auth";

type Store = {
  isAuthenticated: boolean;
};

export const useUserStore = create<Store>(() => ({
  isAuthenticated: false,
}));

export async function checkAuthStatus(redirect = true) {
  const nextStatus = await isAuthenticated().catch(() => false);
  useUserStore.setState({ isAuthenticated: nextStatus });
  if (redirect && !nextStatus) {
    location.href = "/";
  }
}
