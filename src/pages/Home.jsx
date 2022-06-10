import React from 'react'

import logo from '../assets/images/LOGO/optimized/instagram.png'
import image from '../assets/images/Digital Paintings/optimized/BICYCLE-GIRL.jpg'

const Home = () => {
  return (
    <main>
      <div className="container container-home">
        <img src={image} alt="" className="main-image" />
        <h1>Traditional and Digital Artist</h1>
        <img src={logo} alt="" className="logo" />
      </div>
    </main>
  )
}

export default Home
