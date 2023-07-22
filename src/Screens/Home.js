import React from 'react'
import img1 from "./Project_images/universe is inside ourself.jpg"
import img2 from "./Project_images/horse.jpg"
import img3 from "./Project_images/god of death.jpg"
import img4 from "./Project_images/face of colour.jpg"
import img5 from "./Project_images/Labradour dog.jpg"
import img6 from "./Project_images/Lady with wrinkles.jpg"
import img7 from "./Project_images/Christiano Ronaldo.jpg"
import img8 from "./Project_images/sad dog.jpg"
import img9 from "./Project_images/landscape.jpg"
import img10 from "./Project_images/hut.jpg"
import img11 from "./Project_images/lips & neck .jpeg"
import img12 from "./Project_images/glittering eye.jpg"
import img13 from "./Project_images/Burden or respect.jpg"
import img14 from "./Project_images/lady of sand.jpeg"
import Footer from '../components/Footer'
import Navbarx from '../components/Navbarx'


export default function Home() {
  return (
    <>
      <Navbarx />
      <div className="container">
        <div className="heading">
          <h1>Spiral . <span> artbook</span></h1>
        </div>
        <div className="box">
          <div className="dream">
            <img src={img1} alt="universe is inside ourself" />
            <img src={img2} alt="horse" />
            <img src={img3} alt="god of death.jpg" />
            <img src={img4} alt="face of colour" />
            <img src={img5} alt="Labradour dog" />
          </div>
          <div className="dream">
            <img src={img6} alt="Lady with wrinkles" />
            <img src={img7} alt="Christiano Ronaldo" />
            <img src={img8} alt="sad dog" />
            <img src={img9} alt="landscape" />
            <img src={img10} alt="hut" />

          </div>

          <div className="dream">
            <img src={img11} alt="lips & neck" />
            <img src={img12} alt="glittering eye" />
            <img src={img13} alt="Burden or respect" />
            <img src={img14} alt="lady of sand" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
