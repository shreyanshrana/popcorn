import React, { useEffect, useState } from 'react'
import MediaCard from '../../components/MediaCard/MediaCard';
import "./List.css";

const List = (props) => {
    const [movieList, setMovieList] = useState([]);
    // console.log(movieList);
    useEffect(async () => {
        // let res;
        const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=6973dcfea19d8ef259f70d85b99207b4";
        // const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=2021";
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovieList(data.results);
    }, []);

    const getMovies = async (id) => {
        const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id +"&with_watch_monetization_types=flatrate";
        // const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=2021";
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovieList(data.results);
    }
    const GenreButton = (props) => {
        return(
            <div onClick={()=>{getMovies(props.genreID)}} className="transition-all cursor-pointer bg-red-400 inline-block text-sm px-3 py-1 font-bold text-white m-1 hover:bg-red-800 " style={{ borderRadius:"20px" }}>{props.genreName}</div>
        )
    }

    const listGenreButtons = () => {
        let genreButtons = [];
        for(let genre in props.genreList){
            genreButtons.push(<GenreButton genreName={props.genreList[genre]} genreID={genre}/>)
        }
        console.log(genreButtons)
        return genreButtons;
    }
    console.log(props.genreList)
    const genreList = ["Action", "Adventure", "Animation", "Crime", "Comedy"];
    return (
        <React.Fragment>
            <div>
            {
                listGenreButtons()
            }
            </div>
            {
                movieList.map( movie => {
                    return(
                        <MediaCard 
                            img_url={"https://image.tmdb.org/t/p/w200" + movie.poster_path} 
                            title={movie.title} 
                            rating={movie.vote_average}
                            year={movie.release_date}
                            genre={props.genreList[movie.genre_ids[0]] + "/" + props.genreList[movie.genre_ids[1]]}
                            />
                    )
                })
            }
        </React.Fragment>
    )
}

export default List
