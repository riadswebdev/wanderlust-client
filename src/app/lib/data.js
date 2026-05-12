export const allDestinations = async () => {
  try {
    const res = await fetch("http://localhost:9000/destination", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const getDestinationById = async (id) => {
  try {
    const res = await fetch(`http://localhost:9000/destination/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.error(`Error fetching destination with id ${id}:`, error);
    throw error;
  }
};
