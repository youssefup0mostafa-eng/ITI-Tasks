// import { useState } from 'react'
import './App.css'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import Layout from './Layout/Layout'
import Gallery from './Gallery/Gallery'
import Hero from './Hero/Hero'
import Cat from './Cat/Cat'

import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {
  
  const routes = createBrowserRouter([
    {path: '/NavBar', element: <NavBar />},
    {index: true, element: <Home />},
    {path: '/', element: <Layout />},
    {path: '/Footer', element: <Footer />},
    {path: '/Gallery', element: <Gallery />},
    {path: '/Hero', element: <Hero />},
    {path: 'Cat', element: <Cat />}


  ])
  return (
    <>
    
      <RouterProvider router={routes} />
    </>
  )

}

export default App
