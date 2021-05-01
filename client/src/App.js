import { useEffect, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import List from "./pages/List/List";

function App() {
  const [genre, setGenre] = useState({});
  useEffect(async ()=>{
    async function fetchData(){
      const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=6973dcfea19d8ef259f70d85b99207b4&language=en-US";
      let res = await fetch(GENRE_URL);
      const data = await res.json();
      let g = {};
      // console.log(data);
      await data.genres.map(item => g[item.id] = item.name);
      setGenre(g);
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <List genreList={genre}/>
      <SideBar/>
    </div>
  );
}

export default App;
