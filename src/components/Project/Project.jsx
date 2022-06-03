import React from 'react'
import './project.css'
import img1 from '../../assets/proj1-1.jpg'
import img2 from '../../assets/proj1-2.jpg'
import img3 from '../../assets/proj1-3.jpg'
import img4 from '../../assets/proj1-4.jpg'

// Import Swiper core
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const data = [
    {
        avatar: img1,
        name: "Light Mode",
        review: "This is the light mode login page with the icons that rotate and circle constantly.. The login button helps you login int the app using Google Sign in."
    },

    {
        avatar: img2,
        name: "Light Mode",
        review: "This is the light mode login page.. in thi spage you see your name displayed and the 5 most recent transactions made.. Ther is also a plus tool to add more transactions to the database.."
    },

    {
        avatar: img3,
        name: "Dark Mode",
        review: "This is the dark mode login page with the icons that rotate and circle constantly.. The login button helps you login int the app using Google Sign in."
    },

    {
        avatar: img4,
        name: "Dark Mode",
        review: "This is the dark mode login page.. in thi spage you see your name displayed and the 5 most recent transactions made.. Ther is also a plus tool to add more transactions to the database.."
    }
]



const Project = () => {
  return (
    <section id="project">
        <h5>Project 1</h5>
        <h2>Expenditure Tracking App</h2>

        <div className="container project__container">
            <div className="project__detail">
                <h2>Expenditor</h2>
                    <p>
                        This is the light mode login page.. in thi spage you see your name displayed and the 5 most recent transactions made.. Ther is also a plus tool to add more transactions to the database..
                    </p>
            </div>

            <Swiper className="project__content"
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => console.log('slides change')}>
                
                { 
                    data.map(({ avatar, name, review }, index) => { 
                        return (
                            <SwiperSlide key={index} className='projects'>
                                
                                <div className='project__slide'>

                                    <div className='proj__avatar'>
                                        <img src={avatar} alt="Image" />
                                        <p>{ review}</p>
                                    </div>

                                    
                                    
                                </div> 
                            </SwiperSlide>
                        )
                    })
                }

        </Swiper>

        </div>
    </section>
    )
}

export default Project