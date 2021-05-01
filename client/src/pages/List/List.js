import React, { useEffect, useState } from 'react'
import "./List.css";
import ListByCategory from '../../components/ListByCategory/ListByCategory';
import ListByTrending from '../../components/ListByTrending/ListByTrending';


const List = (props) => {
    
    const [trending, setTrending] = useState([]);

    useEffect(()=>{
        document.getElementById("movieList").style.width = window.screen.width - 288 + 'px';
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
                    <div className="w-72 float-left inline-block">
                        <h1>hello</h1>
                    </div>
                    <div className="inline-block py-3" id="movieList">
                        <h1 className="pt-5 px-2 text-3xl font-bold">Trending</h1>
                        <h1 className="p-2 text-xl text-gray-400">All the movies that caught people's attention the past week</h1>
                        <ListByTrending genreList={props.genreList}/>
                        <div className="h-20 p-4"/>
                        <h1 className="px-4 py-1 text-lg font-bold text-gray-700">Find movies by genre</h1>
                        <ListByCategory genreList={props.genreList}/>
                    </div>                    
                </React.Fragment>
                )
                :
                (
                <React.Fragment>
                    <div className="w-44 float-left inline-block">
                        
                    </div>
                    <div className="inline-block" id="movieList">
                        
                    </div>                    
                </React.Fragment>
                )
            }
            
        </React.Fragment>
    )
}

export default List
