import { store } from "../app";

export const accountStore = () => store.collection("accounts");

export const countAccount = () => accountStore().count().get();

export const listAccounts = () =>
  accountStore()
    .listDocuments()
    .then((refs) => store.getAll(...refs))
    .then((docs) => docs.map((d) => d.data()));

export async function trackAccount({ id, ...account }) {
  const idRef = accountStore().doc(id);

  if (!(await idRef.get()).data()) {
    await idRef.create({ id, ...account });
  } else {
    await idRef.update({ id, ...account });
  }
}
