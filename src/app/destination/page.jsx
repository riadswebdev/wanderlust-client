import DestinationCard from "@/components/DestinationCard";
import { allDestinations } from "../lib/data";

export const metadata = {
  title: "Wanderlust - All Destinations",
  description:
    "Explore all the amazing destinations that Wanderlust has to offer. Find your next adventure today!",
};


const DestinationsPage = async () => {
  const destinations = await allDestinations();

  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-360 mx-auto">
        <div className="">
          <h2 className="mt-20 mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Featured Destinations
          </h2>
          <p className="text-lg text-[#6C696D]">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {destinations.map((d) => (
            <DestinationCard key={d._id} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
