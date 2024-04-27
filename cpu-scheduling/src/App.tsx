import React from 'react'
import HomePage from './pages/HomePage/HomePage.tsx'
import MainPage from './pages/MainPage/MainPage.tsx'
import AppCSS from './App.module.css'

export default function App() {
  const [pageNumber, setPageNumber] = React.useState(() => {
    const storedPageNumber = localStorage.getItem('pageNumber')
    return storedPageNumber ? parseInt(storedPageNumber) : 1;
  });


  function changePage(num: number) {
    localStorage.setItem('pageNumber', num.toString())
    setPageNumber(num)
  }

  return (
    <div className={AppCSS['app-container']}>
      {
        pageNumber === 2 ? (
          <MainPage changePage={changePage} />
        ) : (<HomePage changePage={changePage} />)
      }
      
    </div>
  )
}


