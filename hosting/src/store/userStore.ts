import { create } from "zustand";
import { isAuthenticated } from "../api/auth";

type Store = {
  isAuthenticated: boolean;
};

export const useUserStore = create<Store>(() => ({
  isAuthenticated: false,
}));

export async function checkAuthStatus() {
  const status = await isAuthenticated().catch(() => false);
  useUserStore.setState({ isAuthenticated: status });
  if (!status) {
    location.href = "/";
  }
}
