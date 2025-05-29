import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import EmptyCupNavbar from './components/EmptyCupNavbar'
import EmptyCup from './pages/EmptyCup'


const App = () => {

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <EmptyCupNavbar /> 
      <Routes>
        <Route path='/' element={<EmptyCup/>}/>
        <Route path='/emptycup' element={<EmptyCup/>}/>
      </Routes>
    </div>
  )
}

export default App
