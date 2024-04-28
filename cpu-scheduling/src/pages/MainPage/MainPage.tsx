import React from 'react'
import Algorithm from '../../buttons/Algorithm/Algorithm.tsx'
import MainPageCSS from './MainPage.module.css'


export default function MainPage(props: any) {
 
  return (
    <div className={MainPageCSS['main-page-container']}>
      <button onClick={() => { props.changePage(1) }}>Go Back</button>
      <Algorithm name={"FCFS"} />
      <Algorithm name={"SJF"} />
      <Algorithm name={"SRTF"} />
      <Algorithm name={"PR"} />
      <Algorithm name={"RR"} />
    </div>
  )
}


