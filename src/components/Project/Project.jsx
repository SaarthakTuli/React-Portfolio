import React from 'react'
import './project.css'
import ME from '../../assets/Saarthak.png'
import img1 from '../../assets/proj1-1.jpg'
import img2 from '../../assets/proj1-2.jpg'
import img3 from '../../assets/proj1-3.jpg'
import img4 from '../../assets/proj1-4.jpg'

const Project = () => {
  return (
    <section id="project">
        <h5>Project 1</h5>
        <h2>Expenditor</h2>

        <div className="container project__container">
            
            <div className="project__me">
                  <div className="project__me-image">
                      <h2>Expenditor</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi cupiditate iusto, dicta aut amet doloribus eligendi est incidunt minima veritatis distinctio culpa, voluptas reiciendis ab laboriosam fugiat, fugit quaerat accusamus.
                    </p>
                </div>
            </div>

            <div className="project__content">
                <div className="project__cards">
                    <div className="project__item">
                        <img src={img1} alt="me" className='project__img' />
                        <img src={img2} alt="me" className='project__img' />
                    </div>
                    <div className="project__item">
                        <img src={img3} alt="me" className='project__img' />
                        <img src={img4} alt="me" className='project__img' />
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Project