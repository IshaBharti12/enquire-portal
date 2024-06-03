import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/' element = {<Layout/>}>
//       <Route path = '' element={<Home/>}/>
//       <Route path = '/about' element ={<About/>}/>
//       <Route path = '/service' element ={<Service/>}/>
//       <Route path = '/pages' element ={<Pages/>}/>
//       <Route path = '/contact' element ={<Contact/>}/>
//       <Route path='admin' element={<AdminLayout />} >
//         <Route path='' element={<AdminPage />} />
//         <Route path='active' element={<ActiveQueries />} />
//         <Route path='solved' element={<SolvedQueries />} />
//       </Route>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router = {router}/> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
