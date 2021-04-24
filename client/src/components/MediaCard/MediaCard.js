import React from 'react'

const MediaCard = (props) => {

    const Star = () => {
        return(
            <div className="text-yellow-500 text-xs inline-block">
                <ion-icon name="star"></ion-icon>
            </div>
        )
    }
    const HalfStar = () => {
        return(
            <div className="text-yellow-500 text-xs inline-block">
                <ion-icon name="star-half"></ion-icon>
            </div>
        )
    }

    const printRating = (rating) => {
        let stars = [];
        // console.log((rating))
        for(let a = 0 ; a < Math.floor(rating); a++){
            // console.log(a);
            stars.push(<Star/>)
        }
        let decimal = rating - Math.floor(rating);
        // console.log(decimal)
        if(decimal > 0.2)
            stars.push(<HalfStar/>)
        return stars;
    }

    const mouseEnter = () =>{
        document.getElementById("poster-"+props.title).style.filter = "contrast(135%)";
    }
    const mouseLeave = () =>{
        document.getElementById("poster-"+props.title).style.filter = "";
    }
    return (
        <React.Fragment>
            <div className="w-44 m-2 p-1 inline-block cursor-pointer transition-all hover:text-red-500" onMouseEnter={() => {mouseEnter()}} onMouseLeave={()=>{mouseLeave()}}>
                <img style={{ borderRadius:"10px" }} src={props.img_url} alt="movie" id={"poster-" + props.title} className="transition-all"/>
                <div className="w-full h-16 text-center flex justify-center">
                    <h1 className="font-extrabold text-lg align-middle inline-block m-auto" style={{ fontFamily:"Manrope-ExtraBold", wordSpacing:"-2px" }}>{props.title}</h1>
                </div>
                <div className="space-x-4 text-center space-y-1">
                    <p className="text-gray-400 text-xs font-bold">{props.year.substr(0,4)}</p>
                    <p className="text-gray-400 text-xs font-bold">{props.genre}</p>
                </div>
                <div className="text-center">
                    {
                        (props.rating.length == 1)
                        ? 
                            printRating(props.rating)
                        :
                            printRating(props.rating)
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default MediaCard
