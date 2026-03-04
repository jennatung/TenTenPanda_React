import api from "./api";

export async function registerUser(payload) {
  const res = await api.post("/users", payload);
  return res.data;
}
