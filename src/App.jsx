import React from 'react'
import Hero from './sections/Hero'
import AppShowcase from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <AppShowcase />
            <LogoShowcase />
            <FeatureCards />
        </div>
    )
}

export default App