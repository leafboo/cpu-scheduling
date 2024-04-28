import React from 'react'

export default function SRTF(props: any) {
  return (
    <>
      <div>SRTF</div>
      <button onClick={() => { props.changePage(2) }}>Go Back</button>
    </>
  )
}