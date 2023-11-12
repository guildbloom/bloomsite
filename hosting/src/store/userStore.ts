import { create } from "zustand";
import { isAuthenticated } from "../api/auth";

type Store = {
  isAuthenticated: boolean;
};

export const useUserStore = create<Store>(() => ({
  isAuthenticated: false,
}));

export async function checkAuthStatus(redirect = true) {
  const prevStatus = useUserStore.getState()?.isAuthenticated;
  const nextStatus = await isAuthenticated().catch(() => false);
  useUserStore.setState({ isAuthenticated: nextStatus });
  if (redirect && prevStatus && !nextStatus) {
    location.href = "/";
  }
}
