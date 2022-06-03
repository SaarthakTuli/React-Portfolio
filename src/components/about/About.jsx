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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, provident ullam. Maiores corporis sapiente autem ullam praesentium veniam dignissimos facilis, omnis enim iusto optio quas voluptate vero dolores eveniet minus.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>

            </div>
        </section>
    )
};

export default About;