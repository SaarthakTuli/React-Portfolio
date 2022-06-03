import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__contents">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Swift</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__contents">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermeiate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience