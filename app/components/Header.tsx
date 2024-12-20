import Link from "next/link"

const Header = () => {
  return (

    <nav className=" bg-white drop-shadow-lg shadow-1 border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="/" className="flex items-center">
          <div className="w-full h-full px-1 flex justify-between items-center bg-white rounded-lg overflow-hidden dark:bg-gray-900">
            <div className="h-full bg-indigo-600 rounded-md flex flex-col justify-between items-center">
              <div className="w-full h-3/4 px-2 py-1 text-white text-[32px]  font-bold leading-none">ମୋ</div>
            </div>
            <div className="px-2 py-1 h-full text-black text-[34px] font-chewy font-bold underline leading-none dark:text-white">Bazaar</div>
          </div>
        </Link>
        
        <Link href="/create-listing">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center">+ Sell Anything</span>
          </button>
        </Link>
      </div>

      <div className="mt-4 mb-2 px-4 mx-auto max-w-screen-xl">
        <form className="max-w-full mx-auto" action="/mobazaar/search.php">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              name="query" 
              id="default-search" 
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Mobiles, Laptops..."  
            />
            <button 
              type="submit" 
              id="search-button" 
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>


    </nav>
  )
}

export default Header