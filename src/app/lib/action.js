"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addDestination = async (formData) => {
  console.log(formData);
  const destinationName = Object.fromEntries(formData.entries());
  try {
    const response = await fetch("http://localhost:9000/destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destinationName),
    });

    if (!response.ok) {
      throw new Error("Failed to add destination");
    }

    console.log("Destination added successfully");
  } catch (error) {
    console.error("Error adding destination:", error);
    throw error;
  }
  revalidatePath("/destination");
  redirect("/");
};

export const updateDestination = async (id, formData) => {
  console.log(formData);
  const updatedData = Object.fromEntries(formData.entries());
  try {
    const response = await fetch(`http://localhost:9000/destination/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      console.log("Destination updated successfully");
      revalidatePath("/destination");
      revalidatePath(`/destination/${id}`);
      return await response.json();
    } else {
      throw new Error("Failed to update destination");
    }
  } catch (error) {
    console.error("Error updating destination:", error);
    throw error;
  }
};

export const deleteDestination = async (id) => {
  try {
    const res = await fetch(`http://localhost:9000/destination/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete destination");
    } else {
      console.log("Destination deleted successfully");
      revalidatePath("/destination");
      redirect("/destination");
    }
    return await res.json();
  } catch (error) {
    console.error("Error deleting destination:", error);
    throw error;
  }
};
