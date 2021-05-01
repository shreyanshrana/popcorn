import React from 'react'
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="py-10 bg-gray-100 h-screen w-48">
            <div className="p-5">
               <ion-item>
               <ion-icon item-start name="videocam-outline"></ion-icon>
               <label className="text-red-400 font-bold">Track </label> 
               <label>App</label>
             </ion-item> 
            </div>
            <div style= {{transform:"translate(0, -50%)", top:"35%"}} className="p-5 absolute cursor-pointer">
            <div className="option-container"><ion-item>
            <ion-icon item-start name="videocam-outline"></ion-icon>
                <label>Now showing</label> 
            </ion-item>
            </div>
            <div className="option-container">
            <ion-item>
            <ion-icon name="ticket-outline"></ion-icon>
                <label>  My List</label> 
            </ion-item>
            </div>
            <div className="option-container">
            <ion-item>
            <ion-icon name="person-circle-outline"></ion-icon>
                <label> Profile </label> 
            </ion-item>
            </div>
            </div>
            
            
        </div>
    )
}

export default SideBar
