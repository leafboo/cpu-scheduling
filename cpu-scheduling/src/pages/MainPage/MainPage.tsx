import React from 'react'
import Algorithm from '../../buttons/Algorithm/Algorithm.tsx'
import MainPageCSS from './MainPage.module.css'


export default function MainPage(props: any) {

  const AlgorithmElement = props.algorithms.map((algo: {name: string; pageNumber: number}) => 
    <Algorithm name={algo.name} changePage={props.changePage} numPage={algo.pageNumber} />
  )
 
  return (
    <div className={MainPageCSS['main-page-container']}>
      <button onClick={() => { props.changePage(1) }}>Go Back</button>
      
      { AlgorithmElement }
    </div>
  )
}


