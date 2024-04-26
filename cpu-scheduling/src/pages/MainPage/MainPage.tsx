import React from 'react'
import Algorithm from "./Algorithm/Algorithm.tsx"
import ArrivalTimes from "./ArrivalTimes/ArrivallTimes.tsx"
import BurstTimes from "./BurstTimes/BurstTimes.tsx"
import Output from "./Output/Output.tsx"
import Button from "./Button/Button.tsx"

export default function MainPage() {
  const [arrivalTimesData, setArrivalTimesData] = React.useState(0)
  const [BurstTimesData, setBurstTimesData] = React.useState(0)

  const algorithms = [
    { id: 1, name: 'First Come First Serve' },
    { id: 2, name: 'Shortest Job First' },
    { id: 3, name: 'Round Robin' },
    { id: 4, name: 'Priority Scheduling' },
  ];

  function pressButton() {

  }

  return (
    <>
      <Algorithm algorithms={algorithms} />
      <ArrivalTimes arrivalTimesData={arrivalTimesData}
                    setArrivalTimesData={setArrivalTimesData} />
      <BurstTimes />
      <Output />
      <Button pressButton={pressButton} />
    </>
  )
}


