import React from 'react'
import "./RightSide.css"
import Schedule from './Schedule'
function RightSide() {
  return (
    <div className='RightSide1'>
    <div className='heading1'>
      <h3>Today's Scheudule</h3><span className='app1'><i class="bi bi-window-split"></i></span><span className='cal'><i class="bi bi-calendar-date-fill"></i></span>
      </div>
      <Schedule/>
    </div>
  )
}

export default RightSide
