import Image from "next/image";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Card from "./components/Card";

export default function Home() {
  const length = 50;
  return (
    <>
      <Header />
      <MobileNavigation />
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center bg-white dark:bg-gray-900 p-4 max-w-screen-xl  mx-auto">
      {Array.from({ length }).map((_, i) => (
        <Card key={i} />
      ))}
      </section>
    </>
  );
}
