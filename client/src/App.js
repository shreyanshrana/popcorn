import { useState } from "react";
import List from "./pages/List/List";

function App() {
  const [genre, setGenre] = useState({});
  useState(async ()=>{
    const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US";
    let res = await fetch(GENRE_URL);
    const data = await res.json();
    let g = {};
    // console.log(data);
    await data.genres.map(item => g[item.id] = item.name);
    setGenre(g);
  },[])
  return (
    <div className="App">
      <List genreList={genre}/>
    </div>
  );
}

export default App;
