import React from 'react'
import "./Loading.css";

const Loading = () => {
    return (
        <div className="w-screen h-screen body">
            <div class="loader">
                <div class="loader__filmstrip">
                </div>
                <p class="loader__text">
                    loading
                </p>
            </div>
        </div>
    )
}

export default Loading
