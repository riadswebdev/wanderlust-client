"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { BASE_URL, getToken } from "./config";

export const addDestination = async (formData) => {
  const destinationData = Object.fromEntries(formData.entries());
  try {
    const token = await getToken();
    const response = await fetch(`${BASE_URL}/destination`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        autorization: `Bearer ${token}`,
      },
      body: JSON.stringify(destinationData),
    });

    if (!response.ok) {
      throw new Error("Failed to add destination");
    }
    console.log(token, "tokent sdijdoiijed0igjed0");

    console.log("Destination added successfully");
  } catch (error) {
    console.error("Error adding destination:", error);
    throw error;
  }
  revalidatePath("/destination");
  redirect("/");
};

export const updateDestination = async (id, formData) => {
  const updatedData = Object.fromEntries(formData.entries());
  console.log("updatedData:", updatedData);
  try {
    const response = await fetch(`${BASE_URL}/destination/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update destination");
    }
    console.log("Destination updated successfully");
    revalidatePath("/destination");
    revalidatePath(`/destination/${id}`);
    redirect(`/destination/${id}`);
  } catch (error) {
    console.error("Error updating destination:", error);
    throw error;
  }
};

export const deleteDestination = async (destinationId) => {
  try {
    const res = await fetch(`${BASE_URL}/destination/${destinationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete destination");
    }
    console.log("Destination deleted successfully");
    revalidatePath("/destination");
    redirect("/destination");
  } catch (error) {
    console.error("Error deleting destination:", error);
    throw error;
  }
};

export const deleteBookingData = async (bookingId) => {
  try {
    const res = await fetch(`${BASE_URL}/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete booking data");
    }
    console.log("Booking data deleted successfully");
    revalidatePath("/my-books");
    redirect("/my-books");
  } catch (error) {
    console.error("Error deleting booking data", error);
    throw error;
  }
};

export const bookingDataInsertDB = async (id, bookingData) => {
  console.log("booking data in server before added ", bookingData);
  try {
    const response = await fetch(`${BASE_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      revalidatePath(`/destination/${id}`);
      const data = await response.json();
      console.log("server response", data);
      console.log("booking added successfully");
      return data;
    } else {
      throw new Error("Failed to add booking data");
    }
  } catch (error) {
    console.error("Error adding booking:", error);
    throw error;
  }
};
