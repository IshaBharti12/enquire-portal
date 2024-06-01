import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Query/Query.jsx'
import Service from './pages/Conatct/Contact.jsx'
import Pages from './pages/Pages/Pages.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/service' element ={<Service/>}/>
      <Route path = '/pages' element ={<Pages/>}/>
      <Route path = '/contact' element ={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)