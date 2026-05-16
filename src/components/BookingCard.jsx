"use client";

import { bookingDataInsertDB } from "@/app/lib/action";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const { data: session, isPending } = authClient.useSession();
  const Active = session?.user;

  const router = useRouter();

  const [newDepartureDate, setNewDepartureDate] = useState(null);

  const {
    _id,
    destinationName = "",
    description = "",
    imageUrl = "Default Image URL",
    category = "",
    country = new Date(),
    departureDate = "",
    duration = 0,
    price = 0,
    highlights = [],
    customer_support = "",
    cancellation_policy = "",
    cta_text = "",
    date = "",
    duration_days = 0,
    duration_nights = 0,
    highlightsSummary = "",
    overview = "",
    price_basis = "",
    rating = 0,
    review_count = 0,
    starting_price_usd = 0,
    travel_insurance_included = false,
  } = destination || {};

  const handleBookingBtn = async () => {
    if (Active) {
      const newBookingData = {
        userId: Active?.id,
        userName: Active?.name || "",
        userEmail: Active?.email || "",
        userImage: Active?.image || "",
        descriptionId: _id,
        price,
        destinationName,
        destinationImage: imageUrl,
        departureDate,
      };
      toast.success("Successfully Added Booking");
      await bookingDataInsertDB(_id, newBookingData);
      console.log("Booking data in client", newBookingData);
    } else {
      router.replace("/login");
    }
  };

  return (
    <div className="border-2 shadow p-5 rounded-lg w-full md:max-w-100 ">
      <div className="mb-5">
        <div className="">
          <p
            className="mb-1 text-[#6C696D]
              "
          >
            Starting from
          </p>
          <p className="text-2xl sm:text-3xl overflow-hidden md:text-4xl lg:text-[40px] font-semibold text-[#15A1BF]">
            ${price}
          </p>{" "}
          <p className="mt-1 text-[#6C696D]">{price_basis}</p>
        </div>
      </div>
      <div className="text-lg mb-10">{date}</div>
      <div className=" mb-5">
        <Button
          onPress={handleBookingBtn}
          variant="ghost"
          fullWidth
          className="rounded-md bg-[#15A1BF] text-white  "
        >
          Book Now
        </Button>
      </div>
      <div className="">
        <p className="mb-1 text-[#6C696D] flex items-center gap-1">
          {" "}
          <Check /> {customer_support}
        </p>
        <p className="mb-1 text-[#6C696D] flex items-center gap-1">
          {" "}
          <Check /> {cancellation_policy}
        </p>
        <p className="mb-1 text-[#6C696D] flex items-center gap-1">
          {" "}
          <Check /> {duration}
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
