import React from 'react'
import GanttChart from '../../output/ganntChart/GanttChart.tsx'
import Table from '../../output/table/Table.tsx'
import ComputeCSS from './Compute.module.css'

export default function Compute(props: any) {
  const [isButtonPressed, setIsButtonPressed] = React.useState(false)
  const [tempResults, setTempResults] = React.useState()
 

  return (
    <>
      <button className={ComputeCSS['compute-button']} onClick={() => {
        setIsButtonPressed(true)
        setTempResults(props.results)

      }}>Compute</button>
      {
        isButtonPressed ? (
          <>
            <GanttChart results={tempResults} />
            <Table results={tempResults} />
          </>
      ) : null
      }
      
    </>
  )
}