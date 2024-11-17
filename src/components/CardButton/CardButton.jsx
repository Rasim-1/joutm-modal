import './CardButton.css'
import React from 'react'

const CardButton = ({children, className}) => {
  const cl = className ? `card-button ${className}` : 'card-button'
  
    return (

<button className="card-button">

{children}
</button>



  )
}

export default CardButton