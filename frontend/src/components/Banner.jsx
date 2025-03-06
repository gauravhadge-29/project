import React from 'react'

function Home() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-6 mt-20  md:mt-32'>
    <h1 className='font-bold text-2xl'> Showcase AI/ML projects, discover career opportunities, and stay updated with the latest news. Connect with enthusiasts and fuel your passion for AI/ML. Join our community today! <br /><span className='text-green-500 hover:font-extrabold duration-300'>Your journey in the world of AI starts here!</span></h1>
<button className="btn btn-primary w-24 md:max-w-screen-2xl hover:bg-green-600"><a href="https://login-eta-lemon.vercel.app/">Join</a></button>
    </div>
    </div>
    <div className=' w-5/12 hover:shadow-2xl hover:shadow-blue-400 duration-300 mt-24'>
    <img src="front.jpg" alt=""  />
    </div>
   </div>
   </>
  )
}

export default Home
