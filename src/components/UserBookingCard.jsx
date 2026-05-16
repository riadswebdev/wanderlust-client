import { CircleCheckFill } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteBookingData from "./DeleteBookingData";

const UserBookingCard = ({ d }) => {
  const {
    _id,
    descriptionId,
    destinationName,
    departureDate,
    destinationImage,
    price,
  } = d;
  console.log(d);
  // 6a08328fe5d138a7441a67f7
  // 6a07317e989fe753f326f9bc
  return (
    <div className="mb-5 md:flex  gap-6 border-2 p-6 rounded-2xl ">
      <div className="relative aspect-video w-full flex-1">
        <Image
          unoptimized
          src={destinationImage}
          fill
          alt=""
          className="object-cover rounded-md"
        />
      </div>

      <div className="lg:flex justify-between flex-2">
        <div className="my-5">
          <div className="mb-4.5">
            <Chip color="success">
              <CircleCheckFill width={12} />
              <Chip.Label>Completed</Chip.Label>
            </Chip>
            <h2 className="text-2xl sm:text-3xl mt-2 md:text-4xl lg:text-[40px] font-semibold">
              {destinationName}
            </h2>
          </div>

          <div className="mb-4.5">
            <p className="text-[#6C696D] font-medium flex items-center gap-2 mb-2">
              <Icon icon="uim:calender" className="size-5" />{" "}
              <span>Departure : </span>
              {new Date(departureDate).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-[#6C696D] font-medium flex items-center gap-2">
              {" "}
              <Icon
                icon="streamline-plump-color:location-pin-flat"
                className="size-5"
              />{" "}
              <span>Booking ID: </span> {descriptionId}
            </p>
          </div>

          <p className="text-[#15A1BF] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold">
            ${price}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <DeleteBookingData id={_id} />

          <Link href={`/destination/${descriptionId}`}>
            <Button
              variant="outline"
              className="text-white bg-[#15A1BF] border rounded-md text-base"
            >
              <Icon icon="glyphs-poly:eye" className="size-5" /> View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserBookingCard;
