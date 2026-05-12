import Banner from "@/components/Banner";
import HomePage from "@/components/HomePage";
import { allDestinations } from "./lib/data";

export default async function Home() {
  const destinations = await allDestinations();
  return (
    <>
      {/* <Banner /> */}
      <HomePage destinations={destinations} />
    </>
  );
}
