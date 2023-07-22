import React from 'react'
import Footer from '../components/Footer'
import img1 from './Project_images/gmail logo.jpeg'
import img2 from './Project_images/instagram logo.jpeg'
import { Link } from 'react-router-dom'
import Navbarx from '../components/Navbarx'

export default function Contact() {
    return (
        <div style={{ backgroundImage: 'url("https://4kwallpapers.com/images/wallpapers/full-moon-mountain-peak-snow-covered-moon-light-iceland-3840x2160-7288.jpg")', height: '100%', backgroundSize: 'cover' }} >
            <Navbarx />
            <div className='container'>
                <div className="heading">
                    <h1 className='text-gray'>Spiral . <span> artbook</span></h1>
                </div>
                <div className="modal-body rounded-4 p-5 mb-0 aboutbg">
                    <h1 className="fw-bold fs-1 text-white">Contact Us</h1>
                    <ul className="d-grid gap-4 my-5 list-unstyled small">
                        <li className="d-flex gap-4">
                            <img src={img1} className="bi text-body-secondary flex-shrink-0 rounded-1" width="48" height="48" alt='gmail logo'/>
                            <div>
                                <h5 className="mb-0 text-white fs-3 fw-bolder">Spiral.artbook@gmail.com</h5>
                            </div>
                        </li>
                        <li className="d-flex gap-4">
                            <img src={img2} className="bi text-warning flex-shrink-0 rounded-2" width="48" height="48" alt='instagram logo'/>
                            <div>
                                <Link to="https://instagram.com/spiral.artbook?igshid=MzRlODBiNWFlZA==" target='_blank' className="mb-0 text-white fs-3 fw-bolder">Spiral.artbook</Link>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <Footer />
        </div>
    )
}