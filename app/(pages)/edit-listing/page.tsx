"use client"
import React, { useState } from 'react';

const CreateListing = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('India');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [imagePreview, setImagePreview] = useState('/assets/place-holder.jpg');
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setCoverImage(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);
    // Add your form submission logic here
    setIsUpdating(false);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-3xl px-4 py-4 mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center">
          Create a New Listing!
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Image Upload Section */}
          <div className="mx-auto bg-white rounded-lg shadow-md mb-4 items-center dark:bg-gray-800">
            <div className="p-6 mb-4 rounded-lg items-center mx-auto text-center cursor-pointer max-w-xl">
              <label htmlFor="upload" className="cursor-pointer relative">
                {isLoading && (
                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-white shadow-sm dark:text-white dark:bg-gray-800 p-4 rounded">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-100 m-auto" style={{ background: 'linear-gradient(to right, #ff00cc, #3333ff)' }}></div>
                    <p>Compressing Image...</p>
                  </div>
                )}
                <img 
                  src={imagePreview} 
                  className="mb-4 rounded-lg w-full object-center object-cover aspect-[4/3] mx-auto" 
                  alt="Image preview" 
                />
                <h5 className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                  Upload Cover Image
                </h5>
                <span className="text-gray-500 bg-gray-200 z-50">{coverImage}</span>
              </label>
              <input 
                id="upload" 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Title and Price Section */}
          <div className="p-4 mb-4 w-full bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-800">
            <div className="w-full">
              <label htmlFor="title" className="block my-2 text-sm font-bold text-gray-900 dark:text-white">
                Listing Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex. ₹2,999"
                required
              />
            </div>

            {/* Category Selection */}
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select a category</option>
                {/* Add your category options here */}
              </select>
            </div>

            {/* Description */}
            <div className="w-full">
              <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Add Additional Information about Your Product here..."
              />
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="p-4 mb-4 w-full bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-800">
            <div className="w-full">
              <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Your Whatsapp Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="987654321"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="grid gap-4 mb-4 grid-cols-2 sm:gap-6 sm:mb-5 p-4 w-full bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-800">
            <div className="w-full">
              <label htmlFor="country" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="India"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="state" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter state"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="city" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter city"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="pincode" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="753001"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              disabled={isUpdating}
              className="w-3/4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-primary-800"
            >
              {isUpdating ? 'Creating Listing...' : 'Create New Listing'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateListing;