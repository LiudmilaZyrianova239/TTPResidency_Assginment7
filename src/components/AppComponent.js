import React, { Component } from 'react';
import SearchFieldComponent from './SearchFieldComponent.js';
import GifCardPresent from './GifCardComponent.js';
import axios from 'axios';


class AppComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          gifs : [],
        };
    };
    componentDidMount() {
        axios.get("http://api.giphy.com/v1/gifs/trending?api_key=gDhzcwsGQPMrsxeVQSFPZ2ozY4Yd4RXr")
            .then(response => {
              var result = response.data.data;
              this.setState({
                  gifs : result
                });
                console.log (this.state.gifs);
            })
            .catch(err => {
              console.log(err);
            });


    }

  render() {
    console.log (this.state.gifs);
    var allGifs = this.state.gifs.length ? (
        <div>
            {this.state.gifs.map((elem) =>
        <GifCardPresent gif = {elem.images.fixed_height_small.url} key = {elem.id}/>)}
        </div>
    ) : (null);


    return (
      <div >
      // {allGifs}
       <SearchFieldComponent/>
      </div>
    );
  }
}

export default AppComponent;
