const Card = () => {
  return (
    
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="single.php?id=1">
                    <div className="w-full aspect-w-16 aspect-h-9">
                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSYp_I1wVDjM6s2881Aho3tR2BwlfKNxSAqe6GjJP5qVVTSelEEZhmyyWz_TPkO9kS4uwY_QogdUZvUMLan0wVgaXSieG_iTE4vf-QZ9MOENKLrToW2zzyQg" className="object-cover w-full h-full aspect-square" alt="Your Image" width={200} height={200}/>
                    </div>
                </a>
                <div className="p-5">
                    <a href="single.php?id=1">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">₹ 2000</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1 lg:line-clamp-2">Mobile</p>
                    <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1.5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4c3.865 0 7 3.134 7 7 0 3.337-3 8-7 13-4-5-7-9.663-7-13 0-3.866 3.135-7 7-7zM12 6a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-1 lg:line-clamp-2">Delhi, India</p>
                    </div>
                    <a href="single.php?id=' . $row['listing_id'] . '" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
                        <span className="line-clamp-1 ">Check Details</span>
                        
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>


  )
}

export default Card