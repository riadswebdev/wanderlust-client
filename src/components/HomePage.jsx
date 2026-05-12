import DestinationCard from "./DestinationCard";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import Link from "next/link";
import { allDestinations } from "@/app/lib/data";

const HomePage = async () => {
  const destinations = await allDestinations();
  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-360 mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="mt-20 mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Featured Destinations
            </h2>
            <p className="text-lg text-[#6C696D]">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Link href="/destination">
            <Button
              variant="outline"
              className="mt-4 rounded-md p-7 flex items-center gap-4 text-[#15A1BF] border-[#15A1BF]"
            >
              All Destinations <ArrowRight />
            </Button>
          </Link>
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

export default HomePage;
