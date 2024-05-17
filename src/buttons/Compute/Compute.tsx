import React from 'react'
import GanttChart from '../../output/ganntChart/GanttChart.tsx'
import Table from '../../output/table/Table.tsx'
import ComputeCSS from './Compute.module.css'

export default function Compute(props: any) {
  const [isButtonPressed, setIsButtonPressed] = React.useState(false)
  const [tempResults, setTempResults] = React.useState()

  function computeAverage() {
    props.setAverageTurnaroundTime(props.results['Turnaround Time'].reduce((sum: any, current: any) => sum + current, 0))
    props.setAverageWaitingTime(props.results['Waiting Time'].reduce((sum: any, current: any) => sum + current, 0))
  }
 
  
  return (
    <>
      <button className={ComputeCSS['compute-button']} onClick={() => {
        computeAverage()
        setIsButtonPressed(true)
        setTempResults(props.results)

      }}>Compute</button>
      {
        isButtonPressed ? (
          <>
            <GanttChart results={tempResults} />
            <Table results={tempResults}
                   averageTurnaroundTime={props.averageTurnaroundTime}
                   averageWaitingTime={props.averageWaitingTime} />
          </>
      ) : null
      }
      
    </>
  )
}