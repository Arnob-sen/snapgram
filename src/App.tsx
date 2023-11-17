
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './index.css'
import { Home } from './_root/pages'
import Signinform from './_auth/forms/Signinform'
import Signup from './_auth/forms/Signup'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Button } from "keep-react";
export default function App() {
  return (
  <main className='flex h-screen'>
      
    <Routes>
        <Route element={<AuthLayout/>}>
        <Route path='/sign-in' element={<Signinform/>}/>
      <Route path='/sign-up' element={<Signup/>}/>

        </Route>
      
      
      <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
     
    </Routes>


  </main>
  )
}