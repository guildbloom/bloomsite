function doFetch<T = any>(url, init?: RequestInit): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...init,
      body: init?.body ? JSON.stringify(init.body) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        resolve(data);
      } else {
        reject(data);
      }
    });
  });
}

export const doGet = <T = any>(url, init?: RequestInit) =>
  doFetch<T>(url, init);

export const doPost = <T = any>(url, body, init?: RequestInit) =>
  doFetch<T>(url, { ...init, method: "POST", body });
