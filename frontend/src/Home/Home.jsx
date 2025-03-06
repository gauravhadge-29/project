import React from 'react'
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import Post from '../components/Post'
import Nav from '../components/Nav'
import Datasets from '../components/Datasets'
function Home() {
  return (
   <>
    <Nav/>
   <Banner/>
   <Datasets/>
   <Post/>
   <Footer/>
   </>
  )
}

export default Home
