import React from 'react'

function Datasets() {
  return (
    <>
    <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
      <div className='w-9/12 mb-14 hover:shadow-2xl hover:shadow-purple-300 duration-300'>
        <img src="Data.jpg" alt="" />
      </div>
        <div className='space-y-6 mt-20  md:mt-32'>
            <h1 className='text-4xl font-bold m-4 px-20 hover:font-extrabold duration-200'>Empower Your Models with Data</h1>
            <p className='font-semibold m-4 px-20'>Find and download diverse datasets to enhance your machine learning projects. Fuel your predictions with high-quality data.</p>
            <button className="btn btn-neutral mt-2 mb-10 ml-20 w-24 hover:bg-blue-600"><a href="https://drive.google.com/drive/folders/1BYZI5xRZyNcgGnO4I1V33DsGK8_HSz65?usp=sharing">Click!</a></button>
        </div>
    </div>
    </>
  )
}

export default Datasets
