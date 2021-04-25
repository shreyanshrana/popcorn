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
                        id={movie.id}
                        />
                )
                return null;
            })
            setMovieCardList(a);
        }
        fetchData();
        // setLoading(false);
    }, [props.genreList]);


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
        <React.Fragment>
            <ScrollMenu data={movieCardList} dragging={false} translate="100px" arrowLeft={ArrowLeft} arrowRight={ArrowRight} wheel={false} wrapperStyle={{}} hideSingleArrow={true} scrollBy={2}/>
        </React.Fragment>
    )
}

export default ListByTrending
