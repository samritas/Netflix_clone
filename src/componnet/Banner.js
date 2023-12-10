import React,{useEffect,useState} from 'react'
import axios from '../axios'
import requests from '../request'
import './Banner.css'
import Nav from './Nav'
function Banner() {
  const bannerImg="https://image.tmdb.org/t/p/original/"
    // const randomIndex="Math.floor(Math.random() * request.data.results.length)"
    const[movie,setmovie]=useState([]);
  useEffect(()=>{
    async function fetchData(){
      const request= await axios.get(requests.fetchNtflixOrgnal)
      setmovie(request?.data.results[Math.floor(Math.random() * request.data.results.length)])
    }
    fetchData()
  },[])
  // console.log(`${bannerImg}${movie.backdrop_path}`)
  // console.log(movie)
  function trancat(str,n){
    if(str !== undefined){
      return (str.length > n ? str.substr(0,n-1) + " ...": str);
    }
   
  }
  return (
    <header style={{
      backgroundImage: `url(${bannerImg}${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
       <Nav/>
      <div className='banner_contents'>
        <h1 className='banner-title'>
            {movie?.title||movie?.original_name||movie?.name}
        </h1>
        <div className='banner_buttons'>
            <button className='banner_button'>play</button>
            <button className='banner_button'>my list</button>
        </div>
        <div className='banner_discription'>
          {trancat(movie?.overview,150)}
        </div>

      </div>
      <div className='last_div'></div>
    </header>
 
  )
}

export default Banner
