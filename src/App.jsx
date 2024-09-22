import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'


function App() {

  return (
    <div className='app'>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  )
}

export default App
