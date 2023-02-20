import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({isLargeRow,title,fetchUrl}) {
    // movies state
    const [movies,setMovies]=useState([])

    async function fetchData(){
        const result = await instance.get(fetchUrl)
        // console.log(result); //object
        console.log(result.data.results); //array(20) of data
        setMovies(result.data.results)

    }
     
    useEffect(()=>{
      fetchData();
    },[])


    const base_url = "https://image.tmdb.org/t/p/original/";

    console.log(movies);


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movies'>
            {
                movies.map(movie=>(
                    <img className={`movie ${isLargeRow && "largemovie"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} />
                ))
            }
        </div>
    </div>
  )
}

export default Row