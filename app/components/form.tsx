import React from 'react'

const form = () => {
  return (
    <>
    <form className='flex flex-col gap-4'>
        <input className='border border-gray-300 rounded-md p-2' type="text" placeholder="Name" />
        <input className='border border-gray-300 rounded-md p-2' type="email" placeholder="Email" />
        <input className='border border-gray-300 rounded-md p-2' type="password" placeholder="Password" />
        <button className='bg-blue-500 text-white rounded-md p-2' type="submit">Submit</button>
    </form>
    </>
  )
}

export default form