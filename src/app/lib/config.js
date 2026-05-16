export const BASE_URL = process.env.API_URL;
if (!BASE_URL) {
  throw new Error("Missing API_URL");
}