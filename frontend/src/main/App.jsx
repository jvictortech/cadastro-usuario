import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/templante/Logo'
import Nav from '../components/templante/Nav'
import Home from '../components/home/Home'
import Footer from '../components/templante/Footer'

export default props =>
<div className='app'>
    <Logo />
    <Nav />
    <Home/>
    <Footer />   
</div>