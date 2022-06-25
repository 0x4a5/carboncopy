import React from 'react'
import './SidebarSelections.css'

function SidebarSelections({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarSelections ${selected && 'sidebarSelections--active'}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarSelections