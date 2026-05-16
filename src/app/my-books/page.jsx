import { auth } from "@/lib/auth";
import { getUserDataById } from "../lib/data";
import { headers } from "next/headers";
import UserBookingCard from "@/components/UserBookingCard";

const MyBooksPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const userBookingData = await getUserDataById(userId);
  if (userBookingData.data.length === 0) {
    return <div>no booking data</div>;
  }
  const bookingData = userBookingData.data;
  console.log(bookingData, "user dasta");

  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="">
          <h2 className="mt-20 mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Featured Destinations
          </h2>
          <p className="text-lg text-[#6C696D]">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <div className="mt-6">
          {bookingData.map((d) => (
            <UserBookingCard key={d._id} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooksPage;
