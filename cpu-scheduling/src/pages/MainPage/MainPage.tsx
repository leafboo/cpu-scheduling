import React from 'react'
import Algorithm from '../../buttons/Algorithm/Algorithm.tsx'
import MainPageCSS from './MainPage.module.css'


export default function MainPage(props: any) {
 
  return (
    <div className={MainPageCSS['main-page-container']}>
      <button onClick={() => { props.changePage(1) }}>Go Back</button>
      <Algorithm name={"FCFS"} changePage={props.changePage} />
      <Algorithm name={"SJF"} changePage={props.changePage} />
      <Algorithm name={"SRTF"} changePage={props.changePage} />
      <Algorithm name={"PR"} changePage={props.changePage} />
      <Algorithm name={"RR"} changePage={props.changePage} />
    </div>
  )
}


