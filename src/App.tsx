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
    "Priority": []
  });
  console.log(results)

  const algorithms = [
    {name: "FCFS", pageNumber: 3},
    {name: "SJF", pageNumber: 4},
    {name: "PR", pageNumber: 5},
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
            <SJF changePage={changePage}
                 results={results}
                 setResults={setResults} />
          ) : pageNumber === 5 ? (
            <PR changePage={changePage}
                results={results}
                setResults={setResults} />
          ) : (
            <HomePage changePage={changePage} />
          )
        }
      </div>
      
      
    </div>
  )
}

