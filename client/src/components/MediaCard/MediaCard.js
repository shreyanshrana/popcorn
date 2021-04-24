import React from 'react'

const MediaCard = (props) => {

    const mouseEnter = () =>{
        document.getElementById("poster-"+props.title).style.filter = "brightness(0.3) blur(2px)";
        document.getElementById("info-"+props.title).style.display = "flex";
        document.getElementById("title-"+props.title).style.top = "-252px";
        document.getElementById("title-"+props.title).style.position = "relative";
    }
    const mouseLeave = () =>{
        document.getElementById("poster-"+props.title).style.filter = "";
        document.getElementById("info-"+props.title).style.display = "none";
        document.getElementById("title-"+props.title).style.top = "0";
        document.getElementById("title-"+props.title).style.position = "static";
    }
    return (
        <React.Fragment>
            <div className="overflow-hidden relative w-44 h-96 p-1 float-left inline-block cursor-pointer transition-all hover:text-red-500" onMouseEnter={() => {mouseEnter()}} onMouseLeave={()=>{mouseLeave()}}>
                <img style={{ borderRadius:"10px", transitionDuration:".5s" }} src={props.img_url} alt="movie" id={"poster-" + props.title} className="transition-all"/>
                <div className="w-full text-white flex justify-center relative text-center"
                    id={"info-" + props.title}
                    style={{ height:"252px", borderRadius:"10px", 
                    background:"transparent",
                    top:"-252px", display:"none"}}>
                        <h1 className="align-middle m-auto">
                            <p className="text-whote text-sm font-extrabold">{props.year.substr(0,4)}</p>
                            <p className="text-whote text-xs font-bold">{props.genre}</p>
                            <div className="align-middle m-auto text-yellow-400">
                                {props.rating+" "}
                                <ion-icon name="star"></ion-icon>
                            </div>
                        </h1>
                        
                </div>
                <div className="w-full h-20 text-center flex justify-center" id={"title-" + props.title}>
                    <h1 className="font-extrabold text-md align-middle inline-block m-auto" style={{ fontFamily:"Manrope-ExtraBold", wordSpacing:"-2px", whiteSpace:"initial" }}>{props.title}</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MediaCard
