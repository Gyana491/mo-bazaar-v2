import Header from "@/app/components/Header";
import MobileNavigation from "@/app/components/MobileNavigation";

const MyListing = () => {
  return (
    <>
    <Header />
    <MobileNavigation />
    <div className="bg-white dark:bg-gray-900">
        <div className="max-w-3xl px-4 py-4 mx-auto">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center">
                My Listings
            </h2>
        </div>
    </div>
    </>
  )
}

export default MyListing;