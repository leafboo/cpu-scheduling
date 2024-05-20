import React from 'react'
import HomePage from './pages/HomePage/HomePage.tsx'
import MainPage from './pages/MainPage/MainPage.tsx'
import FCFS from './pages/FCFS/FCFS.tsx'
import SJF from './pages/SJF/SJF.tsx'
import PR from './pages/PR/PR.tsx'

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
    "Waiting Time": [],
    "Priority": [],
  });
  
  const [averageWaitingTime, setAverageWaitingTime] = React.useState(0)
  const [averageTurnaroundTime, setAverageTurnaroundTime] = React.useState(0)

  const algorithms = [
    {name: "FCFS", pageNumber: 3},
    {name: "SJF", pageNumber: 4},
    {name: "PR", pageNumber: 5},
  ]

  function changePage(num: number) {
    localStorage.setItem('pageNumber', num.toString())
    setPageNumber(num)
  }

  const commonProps = {
    changePage,
    results,
    setResults,
    averageWaitingTime,
    setAverageWaitingTime,
    averageTurnaroundTime,
    setAverageTurnaroundTime,
    
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
            <FCFS {...commonProps} />
          ) :pageNumber === 4 ? (
            <SJF {...commonProps} />
          ) : pageNumber === 5 ? (
            <PR {...commonProps} />
          ) : (
            <HomePage changePage={changePage} />
          )
        }
      </div>

      {
        pageNumber === 1 ? (
          <div className={AppCSS['credits']}>
            <br />
            <span>Made by: Jan Romel Caranguian & Jude Andrei Pasicolan</span>
          </div>
        ) : null
      }
      
      
      
    </div>
  )
}


