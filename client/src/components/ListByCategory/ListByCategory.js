import React, { useEffect, useState } from 'react';
import MediaCard from "../MediaCard/MediaCard";
import Loading from "../Loading/Loading";
import ScrollMenu from "react-horizontal-scrolling-menu";

const ListByCategory = (props) => {
    const [loading, setLoading] = useState(true);
    const [movieCardList, setMovieCardList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState();
    // console.log(movieList);
    useEffect(() => {
        // let res;
        async function fetchData(){
            let id;
            console.log(props.genreList)
            for(let genre in props.genreList){
                if(props.genreList[genre] === "Adventure")
                    id = genre;
            }
            console.log(id)
            setSelectedGenre(id);
            const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id +"&with_watch_monetization_types=flatrate";
            // const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=6973dcfea19d8ef259f70d85b99207b4";
            // const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=2021";
            const res = await fetch(API_URL);
            const data = await res.json();
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
                        cardType="vertical"
                        id={movie.id}
                        />
                )
                return null;
            })
            setMovieCardList(a);
            setLoading(false);
        }
        fetchData();
    }, [props.genreList]);

    const getMovies = async (id) => {
        setLoading(true);
        setSelectedGenre(id);
        const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id +"&with_watch_monetization_types=flatrate";
        // const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=2021";
        const res = await fetch(API_URL);
        const data = await res.json();
        // setMovieList(data.results);
        let a = [];
        data.results.map( movie => {
            a.push(
                <MediaCard 
                    img_url={"https://image.tmdb.org/t/p/w200" + movie.poster_path} 
                    title={movie.title} 
                    rating={movie.vote_average}
                    year={movie.release_date}
                    genre={props.genreList[movie.genre_ids[0]] + "/" + props.genreList[movie.genre_ids[1]]}
                    key={"v"+movie.title}
                    cardType="vertical"
                    id={movie.id}
                    />
            )
            return null;
        })
        setMovieCardList(a);
        setLoading(false);
    }
    const GenreButton = (props) => {
        if(props.genreID !== selectedGenre)
            return(
                <div onClick={()=>{getMovies(props.genreID)}} 
                    id={props.genreID}
                    className="transition-all cursor-pointer  inline-block text-xs px-3 py-1 font-bold text-red-400 m-1 hover:bg-red-400 hover:text-white " 
                    style={{ borderRadius:"20px" }}>
                        {props.genreName}
                </div>
            )
        else 
            return(
                <div onClick={()=>{getMovies(props.genreID)}} 
                    id={props.genreID}
                    className="transition-all cursor-pointer  inline-block text-xs px-3 py-1 font-bold text-white bg-red-400 m-1" 
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

    const Arrow = ({ text, className }) => {
        return (
        <div
        className={className}
        >{text}</div>
    );
    };

    const ArrowLeft = Arrow({ text: <div className="text-3xl cursor-pointer"><ion-icon name="caret-back-circle-outline"></ion-icon></div>, className: 'arrow-prev' });
    const ArrowRight = Arrow({ text:  <div className="text-3xl cursor-pointer"><ion-icon name="caret-forward-circle-outline"></ion-icon></div>, className: 'arrow-next' });

    return (
        <div>
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
                        <React.Fragment>
                            <ScrollMenu data={movieCardList} dragging={false} arrowLeft = {ArrowLeft} arrowRight={ArrowRight}  wheel={false} wrapperStyle={{}} hideSingleArrow={true} scrollBy={4}/>
                        </React.Fragment>
                    )
                }
        </div>
    )
}

export default ListByCategory
