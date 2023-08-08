import React from 'react'
import {useParams} from 'react-router-dom'


const HelloColors = () => {
  const{color1, color2}=useParams()

  return(
    <div style={{backgroundColor:color2}}>
      <h1 style={{color:color1}}> Hello</h1>
    </div>
  )
}

export default HelloColors