import { redirect } from "next/navigation";

export const addDestination = async (formData) => {
  "use server";
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

  redirect("/");
};
