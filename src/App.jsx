import React from 'react'
import Hero from './sections/Hero'
import AppShowcase from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoShowcase from './sections/LogoShowcase'

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <AppShowcase />
            <LogoShowcase />
        </div>
    )
}

export default App