import React, { Component } from 'react';

const GifCardPresent = (props) => {
    console.log(props.gif);
    return (
        <div>
            <p>Hello</p>
           <p> <img src = {props.gif} alt = "GifImage"></img></p>
        </div>
    )
}

export default GifCardPresent;