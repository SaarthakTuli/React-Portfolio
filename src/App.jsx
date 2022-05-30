import React from 'react'
import Header from './components/header/Header'
import Navigator from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
    return (
        <>
            <Header />
            <Navigator />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
        </>
    )
};

export default App;