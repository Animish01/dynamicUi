import React from 'react'
import './app.css'
import './index.css'
import { Article, Brand, CTA, Navbar } from './components'
import { Header, Footer, Blog, Features, WhatEncrypzion, Possibility } from './containers'

const App = () => {

    return (

        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>

            <Brand />
            <WhatEncrypzion />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App