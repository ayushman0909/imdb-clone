
import "../App.css"
const MovieCardDetails = ({details}) => {
  let {movieposter,title,rating}=details;
  return (
    <div className='MovieCardDetails'>
     <img src="" alt={movieposter} /> {/*Movie Poster */}
      <h1>{title}</h1>
      <h3>{rating}</h3>
    </div>
  )
}

export default MovieCardDetails;
