import React from 'react'
import HomePage from './pages/HomePage/HomePage.tsx'
import MainPage from './pages/MainPage/MainPage.tsx'
import FCFS from './pages/FCFS/FCFS.tsx'
import SJF from './pages/SJF/SJF.tsx'
import SRTF from './pages/SRTF/SRTF.tsx'
import PR from './pages/PR/PR.tsx'
import RR from './pages/RR/RR.tsx'

import AppCSS from './App.module.css'

export default function App() {
  const [pageNumber, setPageNumber] = React.useState(() => {
    const storedPageNumber = localStorage.getItem('pageNumber')
    return storedPageNumber ? parseInt(storedPageNumber) : 1;
  });

  const pages = {
    "Home page": 1,
    "Main page": 2,
    "FCFS": 3,
    "SJF": 4,
    "SRTF": 5,
    "PR": 6,
    "RR": 7
  }

  function changePage(num: number) {
    localStorage.setItem('pageNumber', num.toString())
    setPageNumber(num)
  }

  return (
    <div className={AppCSS['app-container']}>
      {
        pageNumber === 2 ? (
          <MainPage changePage={changePage} />
        ) : pageNumber === 3 ? (
          <FCFS />
        ) :pageNumber === 4 ? (
          <SJF />
        ) : pageNumber === 5 ? (
          <SRTF />
        ) : pageNumber === 6 ? (
          <PR />
        ) : pageNumber === 7 ? (
          <RR />
        ) :(
          <HomePage changePage={changePage} />
        )
      }
      
    </div>
  )
}


