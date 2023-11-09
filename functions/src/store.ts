import { getFirestore } from "firebase-admin/firestore";

export const store = getFirestore();

export function listUsers() {
  return store.collection("users").listDocuments();
}
