import { doGet } from "./_fetch";

export const isAuthenticated = () => doGet<boolean>("/api/auth/status");
