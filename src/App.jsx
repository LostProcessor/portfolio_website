import { useState } from 'react'
import './App.css'
import Banner from './components/Banner.jsx'
import ImageCarousel from './components/ImageCarousel.jsx'
function App() {

  return (
      <div className="relative w-full min-h-screen">
      <Banner />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900 to-indigo-600 z-[-1]"></div>
      <div className=" z-10 p-4 text-white">
       
        <div className="mt-12 text-center">
          <p>Hello, I'm an aspiring web developer</p>
          <br/>
          <p >My projects:</p>
           <ImageCarousel className='mt-30'/>
        </div>
        <img className='mt-18 rounded-full object-center mx-auto'src='../public/moi.jpg' width={200}/>
        <div className='text-center'>
            <h2>About me </h2>
            <p> I like programming , to read and learn about finance.</p>
        </div>
      </div>
    </div>
  )
}

export default App
