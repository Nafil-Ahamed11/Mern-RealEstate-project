import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
        <form className='flex flex-col sm:flex-row'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='60' minLength='10' required />
                <textarea name="" placeholder='Description' className='border p-3 rounded-lg  ' id="description" required></textarea>
                <input type="text" placeholder='Address' className='border p-3 rounded-lg' id='address' required />
                <div className='flex gap-6 flex-wrap'> 
                    <div className='flex gap-2'>
                        <input type="checkbox" id='sell' className='w-5'/>
                        <span>sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='rent' className='w-5'/>
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='parking' className='w-5'/>
                        <span>Parking Spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='furnished' className='w-5'/>
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='offer' className='w-5'/>
                        <span>Offer</span>
                    </div>
                    <div className='flex flex-wrap gap-6'>
                        <div className='flex items-center gap-2 '>
                            <input type="number" id='bedrooms' className='p-3 border border-gray-300 rounded-lg ' min='1' max='10' required/>
                            <p>Beds</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <input type="number" id='bathrooms' className='p-3 border border-gray-300 rounded-lg ' min='1' max='10' required/>
                            <p>Baths</p>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <input type="number" id='regularPrice' className='p-3 border border-gray-300 rounded-lg ' min='1' max='10' required/>
                            <div className="flex flex-col items-center">
                            <p>Regular Price</p>
                            <span className='text-xs'>($ / month)</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <input type="number" id='discountedPrice' className='p-3 border border-gray-300 rounded-lg ' min='1' max='10' required/>
                            <div className="flex flex-col items-center">
                            <p>Discounted Price </p>
                            <span className='text-xs'>($ / month)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-4">
            <p className='font-semibold'>Images:
            <span className='font-normal text-gary ml-2'>The first image will be the cover (max 6) </span>
            </p>
            <div className="flex gap-4">
                <input className='p-3 border-gray-300 roundedw-full' type="file" id='images' accept='image/*' multiple />
                <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
            </div>
            <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                Create Listing
            </button>
            </div>
        </form>
    </main>
  )
}
