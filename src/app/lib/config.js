import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const BASE_URL = process.env.API_URL;
if (!BASE_URL) {
  throw new Error("Missing API_URL");
}

export const getToken = async () => {
  const data = await auth.api.getToken({
    headers: await headers(),
  });
  console.log("data is server ", data);
  return data?.token;
};
