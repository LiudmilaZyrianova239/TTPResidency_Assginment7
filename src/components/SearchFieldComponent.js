import React, { Component } from 'react';
import axios from 'axios';
import GifCardPresent from './GifCardComponent.js';

class SearchFieldComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        serach: "",
        gifs: [],
      };
}

handleChange = (event) => {
    this.setState({
        search: event.target.value
    })
}

handleClick = (event) => {
    event.preventDefault();
    var newString = this.state.search.replace(/\s+/g, '+');
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${newString}&api_key=gDhzcwsGQPMrsxeVQSFPZ2ozY4Yd4RXr`)
        .then(response => {
          var result = response.data.data;
          this.setState({
              gifs : result
            });
            console.log (this.state.gifs);
        })
    .catch(err => console.log(err));
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
          <div>
              <form>
                  Search Gifs: &nbsp;
                  <input type='text' placeholder="Type Search" onChange={this.handleChange}/>
                  <button className = "button" onClick={this.handleClick}>Search</button>
              </form>
               {allGifs}
          </div>
      );
    }
}



export default SearchFieldComponent;
