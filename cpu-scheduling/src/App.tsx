import React from 'react'
import HomePage from './pages/HomePage/HomePage.tsx'
import MainPage from './pages/MainPage/MainPage.tsx'
import AppCSS from './App.module.css'

export default function App() {
  const [pageNumber, setPageNumber] = React.useState(1)


  function changePage() {
    
  }

  return (
    <div className={AppCSS['app-container']}>
      {
        pageNumber === 2 ? (
          <MainPage />
        ) : (<HomePage changePage={changePage} />)
      }
      
    </div>
  )
}


