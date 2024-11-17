import React from 'react'
import "./JournalItem.css"

const JournalItem = (title, text, data) => {
  return (
  <>
  <h2 className="JournalItem__header">{title}</h2>
  <div className="JournalItem__body">
    <p className="JournalItem__data">{data}</p>
    <p className="JournalItem__text">{text}</p>
  </div>
  
  </>
  )
}

export default JournalItem