import { store } from "../app";

export const waitlistStore = () => store.collection("waitlist");

export const countWaitlist = () => waitlistStore().count().get();

export const listWaitlist = () =>
  waitlistStore()
    .listDocuments()
    .then((refs) => store.getAll(...refs))
    .then((docs) => docs.map((d) => d.data()));

export async function trackWaitlist({ id, ...waitlist }) {
  const idRef = waitlistStore().doc(id);

  if (!(await idRef.get()).data()) {
    await idRef.create({ id, ...waitlist });
  } else {
    await idRef.update({ id, ...waitlist });
  }
}
