import { getFirestore } from "firebase-admin/firestore";

const store = getFirestore();

export function listUsers() {
  return store.collection("users").listDocuments();
}
