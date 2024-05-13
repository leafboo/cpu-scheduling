import React from 'react'
import ProcessCSS from './Process.module.css'

export default function Process(props: any) {
  return (
    <span className={ProcessCSS['process']}>
      P{props.processNumber}
    </span>
  )
}