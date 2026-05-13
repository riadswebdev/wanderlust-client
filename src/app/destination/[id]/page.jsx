import { getDestinationById } from "@/app/lib/data";
import BackToDestination from "@/components/BackToDestination";
import { DeleteDestination } from "@/components/DeleteDestination";
import { EditDestination } from "@/components/EditDestination";
import { ProverDeleteBtn } from "@/components/Prover";
import { Calendar, Check, StarFill } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

export const metadata = {
  title: "Wanderlust - Destination Details",
  description:
    "Discover the details of your favorite destination with Wanderlust. Find everything you need to know before your next adventure!",
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const destination = await getDestinationById(id);
  console.log(destination);

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
  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="">
          <div className="sm:flex items-center justify-between mb-5">
            <div className="">
              <BackToDestination />
            </div>
            <div className="mt-5 sm:mt-0 flex items-center gap-2">
              <EditDestination destination={destination} />
              <ProverDeleteBtn />
              {/* <DeleteDestination id={_id} /> */}
            </div>
          </div>
          <div className="relative w-full h-auto lg:h-140 aspect-video mb-20 mx-auto">
            <Image
             
              src={imageUrl}
              alt={destinationName}
              fill
              className="rounded-lg object-cover mx-auto"
            />
          </div>
        </div>
        <div className="md:flex items-center justify-between">
          <div className="mb-10 mb:mb-0">
            <div className="mb-4">
              <p className="flex items-center gap-1 font-medium text-[#6C696D] ">
                <IoLocationOutline />
                {country}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {destinationName}
              </h2>
            </div>

            <div className="flex items-center gap-2 mb-10">
              <p className="flex items-center font-semibold gap-1">
                <StarFill className="text-yellow-700" /> {rating}
              </p>
              <p className="text-[#6C696D]">({review_count} reviews)</p>
              <p className="flex items-center font-semibold gap-1">
                <Calendar /> {duration_days} days /
              </p>
              <p className="font-semibold">{duration_nights} nights</p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#0c0b0bf5] mb-5 ">
                Overview
              </h3>
              <p className="text-lg text-[#6C696D]">{overview}</p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#0c0b0bf5] mb-5 ">
                Highlights
              </h3>
              <p className="text-lg text-[#6C696D]">{highlightsSummary}</p>
            </div>
            <ul className="grid grid-cols-2 text-lg space-y-3 text-[#6C696D]">
              {highlights.map((highlight, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <Check /> {highlight}
                </li>
              ))}
            </ul>
          </div>

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
                variant="ghost"
                fullWidth
                className="rounded-md bg-[#15A1BF] text-white  "
              >
                {cta_text}
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
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
