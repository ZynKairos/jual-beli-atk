import React from 'react'
import NavbarComponent from '../component/Navbar'
import Footer from '../component/Footer'
import CarouselComponent from '../component/Carousel'
import Product from '../component/Product'

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <Product />
      <Footer />
    </div>
  )
}

export default Home
