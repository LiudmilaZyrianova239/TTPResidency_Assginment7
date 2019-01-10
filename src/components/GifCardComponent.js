import React, { Component } from 'react';

const GifCardPresent = (props) => {
    return (
        <div>
            <p>{props.title}</p>
           <p> <img src = {props.gif} alt = "GifImage"></img></p>
        </div>
    )
}

export default GifCardPresent;