import React from "react"
import "./about.css"
import SaarthakAbout from '../../assets/Saarthak-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={SaarthakAbout} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ years Coding</small>
                        </article>


                        <article className="about__card">
                            <FiUser className="about__icon" />
                            <h5>Clients</h5>
                            <small>Scalable to 500 users</small>
                        </article>


                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>20+ completed projects</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque rem eligendi quos expedita! Aperiam vitae ab tenetur, minima explicabo illo soluta, unde at laborum, aspernatur consequatur blanditiis qui adipisci molestias aliquid quam modi quisquam voluptatem. Ratione sequi tempora, esse amet cupiditate dicta qui. Consectetur dolorem ex atque ab animi quia saepe vero! Molestiae impedit veritatis est ad consectetur? Inventore ullam reiciendis reprehenderit ut beatae voluptate tempore iste expedita laborum. Delectus voluptates, exercitationem est voluptatum suscipit quos possimus quibusdam aut porro eligendi soluta voluptatibus nulla error fugiat eius velit earum ullam consequatur illo magnam. Aliquid perspiciatis, explicabo autem totam doloremque in?
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>

            </div>
        </section>
    )
};

export default About;