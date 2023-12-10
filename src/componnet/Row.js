import React,{useState,useEffect} from 'react'
import row from "./Row.css"
import axios from '../axios'
import YouTube from 'react-youtube'
import trailer from 'movie-trailer'
import movieTrailer from 'movie-trailer'


function Row({title,fetchUrl,isLargeRow}) {
  const imgBaseURL="https://image.tmdb.org/t/p/original"
  const[movies,setmovie]=useState([]);
  const [trailerUrl,setTrailerUrl]=useState()
  useEffect(()=>{
    async function fetchData(){
      const request= await axios.get(fetchUrl)
      setmovie(request.data.results)
    }
    fetchData()
  },[fetchUrl])
  // console.log(movies)
const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.title || movie?.original_name || movie?.name)
      .then((url) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(trailerUrl)
        } else {
          // Handle the case where the URL is null or undefined
          console.log("No trailer URL found.");
        }
      })
      .catch((error) => console.log(error));
  }
};
const opts={
  height:"390",
  width:"100%",
  playerVars:{
    autoplay:1,
  },
}

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies.map((movie) => (
          <img onClick={()=>handleClick(movie)}
          className={`row_poster ${isLargeRow && "Row_posterLarge"}`}
          src={`${imgBaseURL}${isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name} key={movie.id} />
        ))}
      </div>
     
<div style={{
        padding:"40px",
        // width:"600px"
      }}>
  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
</div>
    </div>
  )
}

export default Row
