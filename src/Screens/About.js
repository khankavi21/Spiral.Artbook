import React from 'react'

import Footer from '../components/Footer'
import img1 from './Project_images/image.jpg' 
import Navbarx from '../components/Navbarx'

export default function About() {
    return (
        <div style={{ backgroundImage: 'url("https://4kwallpapers.com/images/wallpapers/full-moon-mountain-peak-snow-covered-moon-light-iceland-3840x2160-7288.jpg")', height: '100%', backgroundSize: 'cover' }}>
          
            <Navbarx />
            <div className="container">
                <div className="heading">
                    <h1>Spiral . <span> artbook</span></h1>
                </div>
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5  rounded-3 border shadow-lg aboutbg "  >
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
                        <h1 className="display-4 fw-bold lh-1 text-white" style={{"border-bottom": "3px solid #ffffff;"}}>About Us</h1>
                        <p className="d-flex fs-4 fx-bold ">An art gallery is a space dedicated to showcasing and 
                        exhibiting various forms of visual art. <br/> Spiral.artbook is an Art Gallery. <br/>
                        All the captivating artwork showcased on this page is exclusively crafted by Abdul Kavi Khan, 
                        a talented artist and a student of IIIT.<br/> 
                        Every piece of art you see here is a testament to his creativity and dedication. 
                        Abdul Kavi Khan is also the individual owner of this art page, 
                        curating a personal collection that reflects his unique artistic vision. 
                        </p>

                    </div>
                    <div className="col-lg-4 offset-lg-1 mt-20 mb-10 overflow-hidden shadow-lg">
                        <img className="rounded-4 mr-10 mb-10 " src={img1} style={{ filter: "brightness(75%)" }} alt="" width="95%" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

