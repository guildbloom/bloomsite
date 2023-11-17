import { create } from "zustand";
import { isAuthenticated } from "../api/auth";
import { featureFlags } from "@src/common/utils/featureflag";

type Store = {
  isAuthenticated: boolean;
};

export const useUserStore = create<Store>(() => ({
  isAuthenticated: false,
}));

export async function checkAuthStatus(redirect = true) {
  // during beta
  if (featureFlags.main) return (location.href = "/");

  const nextStatus = await isAuthenticated().catch(() => false);
  useUserStore.setState({ isAuthenticated: nextStatus });
  if (redirect && !nextStatus) {
    location.href = "/";
  }
}
