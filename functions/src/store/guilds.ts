import { store } from "../app";

export const guildStore = () => store.collection("guilds");

export const countGuilds = () => guildStore().count().get();

export const listGuilds = () =>
  guildStore()
    .listDocuments()
    .then((refs) => store.getAll(...refs))
    .then((docs) => docs.map((d) => d.data()));

export async function trackGuilds(guilds = []) {
  for (const { id, name, icon, features } of guilds) {
    const idRef = guildStore().doc(id);

    const dataToUpdateOrCreate = {
      id,
      name,
      icon,
      features,
    };

    await idRef
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          // Document exists, update it
          return idRef.update(dataToUpdateOrCreate);
        } else {
          // Document doesn't exist, create it
          return idRef.set(dataToUpdateOrCreate);
        }
      })
      .then(() => {
        console.log("Record updated or created successfully.");
      })
      .catch((error) => {
        console.error("Error updating or creating record:", error);
      });
  }
}
