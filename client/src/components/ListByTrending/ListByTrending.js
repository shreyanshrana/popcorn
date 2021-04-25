import React, { useEffect, useState } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import MediaCard from '../MediaCard/MediaCard';

const ListByTrending = (props) => {

    const [movieCardList,setMovieCardList] = useState([]);
    useEffect( () => {
        async function fetchData(){
            const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=6973dcfea19d8ef259f70d85b99207b4";
            const res = await fetch(API_URL);
            const data = await res.json();
            // setMovieList(data.results);
            let a = [];
            data.results.map( movie => {
                a.push(
                    <MediaCard
                        img_url={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} 
                        title={movie.title} 
                        rating={movie.vote_average}
                        year={movie.release_date}
                        genre={props.genreList[movie.genre_ids[0]] + "/" + props.genreList[movie.genre_ids[1]]}
                        key={"h-"+movie.title}
                        cardType="horizontal"
                        />
                )
                return null;
            })
            setMovieCardList(a);
        }
        fetchData();
        // setLoading(false);
    }, [props.genreList]);

    return (
        <React.Fragment>
            <ScrollMenu data={movieCardList} dragging={false}  wheel={true} wrapperStyle={{}} hideSingleArrow={true} scrollBy={2}/>
        </React.Fragment>
    )
}

export default ListByTrending
