import React, { useEffect, useState } from 'react'
import "./List.css";
import ListByCategory from '../../components/ListByCategory/ListByCategory';
import ListByTrending from '../../components/ListByTrending/ListByTrending';


const List = (props) => {
    
    const [trending, setTrending] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=6973dcfea19d8ef259f70d85b99207b4";
            const res = await fetch(API_URL);
            const data = await res.json();
            setTrending(data.results); 
        // console.log(data.results);
        }
        fetchData();
    },[])
    return (
        <React.Fragment>
            {
                (trending.length > 0)
                ?
                (
                <React.Fragment>
                    <ListByTrending genreList={props.genreList}/>
                    <ListByCategory genreList={props.genreList}/>
                </React.Fragment>
                )
                :
                (
                    <React.Fragment/>
                )
            }
            
        </React.Fragment>
    )
}

export default List
