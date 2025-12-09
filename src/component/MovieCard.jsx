import React from 'react'
import MovieCardDetails from './MovieCardDetails'

const MovieCard = () => {
    let styles={
        color:"red",
        backgroundColor:"white",
        border:"1px solid black",
        padding:"20px",
        minWidth:"300px",
        minHeight:"200px",
        borderRadius:"10px",
        textAlign:"center",
        cursor:"pointer"
    }
    const cardDetails=
      {
         movieposter:"image",
         title:"movie",
         rating:"5"
      }
  
  return (
    <div className='MovieCard' style={styles}>
      <MovieCardDetails details={cardDetails}/>
    </div>
  )
}

export default MovieCard
