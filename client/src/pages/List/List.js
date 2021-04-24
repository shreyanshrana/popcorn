import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading';
import MediaCard from '../../components/MediaCard/MediaCard';
import "./List.css";
import ScrollMenu from 'react-horizontal-scrolling-menu';


const List = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieCardList, setMovieCardList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState();
    // console.log(movieList);
    useEffect(async () => {
        // let res;
        let id;
        console.log(props.genreList)
        for(let genre in props.genreList){
            if(props.genreList[genre] === "Action")
                id = genre;
        }
        console.log(id)
        setSelectedGenre(id);
        const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id +"&with_watch_monetization_types=flatrate";
        // const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=6973dcfea19d8ef259f70d85b99207b4";
        // const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=2021";
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovieList(data.results);
        let a = [];
        data.results.map( movie => {
            a.push(
                <MediaCard 
                    img_url={"https://image.tmdb.org/t/p/w200" + movie.poster_path} 
                    title={movie.title} 
                    rating={movie.vote_average}
                    year={movie.release_date}
                    genre={props.genreList[movie.genre_ids[0]] + "/" + props.genreList[movie.genre_ids[1]]}
                    key={movie.title}
                    />
            )
        })
        setMovieCardList(a);
        setLoading(false);
    }, []);

    const getMovies = async (id) => {
        setLoading(true);
        setSelectedGenre(id);
        const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id +"&with_watch_monetization_types=flatrate";
        // const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=2021";
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovieList(data.results);
        let a = [];
        data.results.map( movie => {
            a.push(
                <MediaCard 
                    img_url={"https://image.tmdb.org/t/p/w200" + movie.poster_path} 
                    title={movie.title} 
                    rating={movie.vote_average}
                    year={movie.release_date}
                    genre={props.genreList[movie.genre_ids[0]] + "/" + props.genreList[movie.genre_ids[1]]}
                    key={movie.title}
                    />
            )
        })
        setMovieCardList(a);
        setLoading(false);
    }
    const GenreButton = (props) => {
        if(props.genreID !== selectedGenre)
            return(
                <div onClick={()=>{getMovies(props.genreID)}} 
                    id={props.genreID}
                    className="transition-all cursor-pointer  inline-block text-sm px-3 py-1 font-bold text-red-400 m-1 hover:bg-red-400 hover:text-white " 
                    style={{ borderRadius:"20px" }}>
                        {props.genreName}
                </div>
            )
        else 
            return(
                <div onClick={()=>{getMovies(props.genreID)}} 
                    id={props.genreID}
                    className="transition-all cursor-pointer  inline-block text-sm px-3 py-1 font-bold text-white bg-red-400 m-1" 
                    style={{ borderRadius:"20px" }}>
                        {props.genreName}
                </div>
            )
    }

    const listGenreButtons = () => {
        let genreButtons = [];
        for(let genre in props.genreList){
            if(props.genreList[genre] === "Action" || props.genreList[genre] === "Adventure" || props.genreList[genre] === "Animation" || props.genreList[genre] === "Comedy" || props.genreList[genre] === "Crime" || props.genreList[genre] === "Romance" || props.genreList[genre] === "Science Fiction")
                genreButtons.push(<GenreButton genreName={props.genreList[genre]} genreID={genre}/>)
        }
        // console.log(genreButtons)
        return genreButtons;
    }

    return (
        <React.Fragment>
            <div className="px-16">
                {
                    listGenreButtons()
                }
            </div>
                {
                    (loading)
                    ? (
                        <Loading/>
                    )
                    :
                    (
                        <ScrollMenu data={movieCardList} dragging={false}  wheel={true} wrapperStyle={{}} hideSingleArrow={true} scrollBy={2}/>
                    )
                }
        </React.Fragment>
    )
}

export default List
