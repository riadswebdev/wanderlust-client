import { BASE_URL } from "./config";

export const allDestinations = async () => {
  try {
    const res = await fetch(`${BASE_URL}/destination`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const getDestinationById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/destination/${id}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching destination with id ${id}:`, error);
    throw error;
  }
};
export const getUserDataById = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/booking/${userId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch booking data");
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching destination with id ${userId}`, error);
    throw error;
  }
};
