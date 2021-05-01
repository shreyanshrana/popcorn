import React from 'react'

const MediaCard = (props) => {

    const mouseEnterV = () =>{
        document.getElementById("v-poster-"+props.title).style.filter = "brightness(0.3) blur(2px)";
        document.getElementById("v-info-"+props.title).style.display = "flex";
        document.getElementById("v-title-"+props.title).style.top = "-252px";
        document.getElementById("v-title-"+props.title).style.position = "relative";
    }
    const mouseLeaveV = () =>{
        document.getElementById("v-poster-"+props.title).style.filter = "";
        document.getElementById("v-info-"+props.title).style.display = "none";
        document.getElementById("v-title-"+props.title).style.top = "0";
        document.getElementById("v-title-"+props.title).style.position = "static";
    }
    const mouseEnterH = () =>{
        document.getElementById("h-poster-"+props.title).style.filter = "brightness(0.3) blur(2px)";
        document.getElementById("h-info-"+props.title).style.display = "flex";
        document.getElementById("h-title-"+props.title).style.top = "-175.5px";
        document.getElementById("h-title-"+props.title).style.position = "relative";
    }
    const mouseLeaveH = () =>{
        document.getElementById("h-poster-"+props.title).style.filter = "";
        document.getElementById("h-info-"+props.title).style.display = "none";
        document.getElementById("h-title-"+props.title).style.top = "0";
        document.getElementById("h-title-"+props.title).style.position = "static";
    }
    return (
        <React.Fragment>
            {
                (props.cardType === "vertical")
                ?
                (
                <a href={"/movie/"+props.id}>
                    <div className="overflow-hidden relative w-36 h-96 p-1 m-1 float-left inline-block cursor-pointer transition-all hover:text-red-500" 
                        onMouseEnter={() => {mouseEnterV()}} onMouseLeave={()=>{mouseLeaveV()}}>
                        <img style={{ borderRadius:"10px", transitionDuration:".5s" }} src={props.img_url} alt="movie" id={"v-poster-" + props.title} className="transition-all"/>
                        <div className="w-full text-white flex justify-center relative text-center"
                            id={"v-info-" + props.title}
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
                        <div className="w-full h-20 text-center flex justify-center" id={"v-title-" + props.title}>
                            <h1 className="font-extrabold text-md align-middle inline-block m-auto" style={{ fontFamily:"Manrope-ExtraBold", wordSpacing:"0px", whiteSpace:"initial" }}>{props.title}</h1>
                        </div>
                    </div>
                </a>
                )
                :
                (
                <a href={"/movie/"+props.id}>
                    <div className="overflow-hidden relative w-80 h-60 p-1 m-1 float-left inline-block cursor-pointer transition-all hover:text-red-500" onMouseEnter={() => {mouseEnterH()}} onMouseLeave={()=>{mouseLeaveH()}}>
                        <img style={{ borderRadius:"10px", transitionDuration:".5s" }} src={props.img_url} alt="movie" id={"h-poster-" + props.title} className="transition-all"/>
                        <div className="w-full text-white flex justify-center relative text-center"
                            id={"h-info-" + props.title}
                            style={{ height:"175.5px", borderRadius:"10px", 
                            background:"transparent",
                            top:"-175.5px", display:"none"}}>
                                <h1 className="align-middle m-auto">
                                    <p className="text-whote text-sm font-extrabold">{props.year.substr(0,4)}</p>
                                    <p className="text-whote text-xs font-bold">{props.genre}</p>
                                    <div className="align-middle m-auto text-yellow-400">
                                        {props.rating+" "}
                                        <ion-icon name="star"></ion-icon>
                                    </div>
                                </h1>
                                
                        </div>
                        <div className="w-full h-16 text-left flex justify-left" id={"h-title-" + props.title}>
                            <h1 className="font-extrabold text-lg inline-block m-auto" style={{ fontFamily:"Manrope-ExtraBold", wordSpacing:"0px", whiteSpace:"initial" }}>{props.title}</h1>
                        </div>
                    </div>
                </a>
                )
            }
            
        </React.Fragment>
    )
}

export default MediaCard;
