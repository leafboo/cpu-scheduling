import React from 'react'


export default function MainPage(props: any) {
 
  return (
    <>
      <button onClick={() => { props.changePage(1) }}>Go Back</button>
    </>
  )
}


