import { getDestinationById } from "@/app/lib/data";
import { Calendar, Check, StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const destination = await getDestinationById(id);
  console.log(destination);
  const {
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
    <div className="w-full max-w-7xl mx-auto ">
      <div className="relative w-full aspect-video">
        <Image
          unoptimized
          src={imageUrl}
          alt={destinationName}
          fill
          className="rounded-lg object-cover "
        />
      </div>
      <div className="">
        <div className="">
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
        <div className="">
          <div>
            <div>
              <div className="">
                <p>Starting from</p> <p>${starting_price_usd}</p>{" "}
                <p>{price_basis}</p>
              </div>
            </div>
            <div className="text-[#6C696D]">{date}</div>
            <div className="text-[#6C696D]">
              {/* <Button>Book Now</Button> */}
            </div>
            <div className="">
              <p>{customer_support}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
