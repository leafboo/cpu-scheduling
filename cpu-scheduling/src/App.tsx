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

  const [results, setResults] = React.useState({  
    "Process": [],
    "Arrival Time": [],
    "Burst Time": [],
    "Completion Time": [],
    "Turnaround Time": [],
    "Waiting Time": []
  });
  console.log(results)

  const algorithms = [
    {name: "FCFS", pageNumber: 3},
    {name: "SJF", pageNumber: 4},
    {name: "SRTF", pageNumber: 5},
    {name: "PR", pageNumber: 6},
    {name: "RR", pageNumber: 7}
  ]

  function changePage(num: number) {
    localStorage.setItem('pageNumber', num.toString())
    setPageNumber(num)
  }

  return (
    <div className={AppCSS['app-container']}>
      <div className={AppCSS['box']}>
        {
          pageNumber === 2 ? (
            <MainPage changePage={changePage} 
                      algorithms={algorithms}
                      setResults={setResults} />
          ) : pageNumber === 3 ? (
            <FCFS changePage={changePage}
                  results={results}
                  setResults={setResults} />
          ) :pageNumber === 4 ? (
            <SJF changePage={changePage} />
          ) : pageNumber === 5 ? (
            <SRTF changePage={changePage} />
          ) : pageNumber === 6 ? (
            <PR changePage={changePage} />
          ) : pageNumber === 7 ? (
            <RR changePage={changePage} />
          ) : (
            <HomePage changePage={changePage} />
          )
        }
      </div>
      
      
    </div>
  )
}


