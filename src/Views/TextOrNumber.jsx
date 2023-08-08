import React from 'react'
import {useParams} from 'react-router-dom'

const TextOrNumber = () => {
    const {value}= useParams()
    //pairprogramming with Josh,Kye, Anthony, Daisy, Richard, Eric
    if(isNaN(value)===false){
      return(
        <div>
          <h3>This is your number: {value}</h3>
        </div>
      )
    } else {
  return (
    <div>
        
        <h3> The word is:{value}</h3>
    </div>
    )}
  }

export default TextOrNumber