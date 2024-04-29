import React from 'react'
import Algorithm from '../../buttons/Algorithm/Algorithm.tsx'
import GoBack from '../../buttons/GoBack/GoBack.tsx'
import MainPageCSS from './MainPage.module.css'


export default function MainPage(props: any) {

  const AlgorithmElement = props.algorithms.map((algo: {name: string; pageNumber: number}) => 
    <Algorithm name={algo.name} changePage={props.changePage} pageNumber={algo.pageNumber} />
  )
 
  return (
    <div className={MainPageCSS['main-page-container']}>
      <GoBack changePage={props.changePage}
              pageNumber={1} />
      
      { AlgorithmElement }
    </div>
  )
}


