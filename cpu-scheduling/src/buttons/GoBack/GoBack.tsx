import React from 'react'
import GoBackCSS from './GoBack.module.css'

export default function GoBack(props) {
  return (
    <>
      <button className={GoBackCSS['back-button']} onClick={() => { props.changePage(props.pageNumber) }}>Go Back</button>     
    </>
  )
}