import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Services from './components/Services/Services.jsx'
import Blog from './components/Blog/Blog.jsx' 

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
      
//       {path:""
//       ,element:<Home/>
//     },
//       {path:"about",element:<About/>},
//       {path:"contact",element:<Contact/>}
  
  
  
  
  
  
//   ]
//   }
  
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='about' element={<About/>} />
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route path='services' element={<Services/>} />
      <Route path='blog' element={<Blog/>} />

    </Route>



  )




)










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
