"use client";
import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] text-white mb-30 flex justify-between flex-col items-center  gap-5 h-150">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className="text-black w-full max-w-6xl mx-auto ">
        {/* মোবাইলে কলাম, ডেস্কটপে রো */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-2 p-4 bg-white rounded-lg shadow-lg mx-3">
          <div className="px-3 py-2 md:py-0 text-center md:text-left">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs text-gray-600">Address, City or Zip</p>
          </div>

          {/* separator - মোবাইলে হরাইজন্টাল, ডেস্কটপে ভার্টিক্যাল */}
          <div className="hidden md:block ">
            <Separator orientation="vertical" className="h-8" />
          </div>
          <div className="block md:hidden">
            <Separator orientation="horizontal" className="w-full" />
          </div>

          <div className="px-3 py-2 md:py-0 text-center md:text-left">
            <h3 className="text-sm font-semibold">Date/Duration</h3>
            <p className="text-xs text-gray-600">Anytime/3 Days</p>
          </div>

          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-8" />
          </div>
          <div className="block md:hidden">
            <Separator orientation="horizontal" className="w-full" />
          </div>

          <div className="px-3 py-2 md:py-0 text-center md:text-left">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs text-gray-600">$0-$3000</p>
          </div>

          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-8" />
          </div>
          <div className="block md:hidden">
            <Separator orientation="horizontal" className="w-full" />
          </div>

          <div className="px-3 py-2 md:py-0 text-center md:text-left">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs text-gray-600">5-10</p>
          </div>

          {/* Search Button */}
          <div className="bg-cyan-500 py-3 px-6 rounded-md cursor-pointer hover:bg-cyan-600 transition text-center md:text-center">
            <h3 className="text-white font-semibold">Search</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
