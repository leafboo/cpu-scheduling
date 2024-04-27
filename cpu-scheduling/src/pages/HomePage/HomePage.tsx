import React from 'react'
import HomePageCSS from './HomePage.module.css'

export default function HomePage(props) {
  return (
    <div className={HomePageCSS['home-page-container']}>
      <div> CPU Scheduling</div>
     
      <button className={HomePageCSS['start-button']} onClick={props.changePage}>Start</button>
         
    </div>
  )
}