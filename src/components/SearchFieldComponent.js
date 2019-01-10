import React, { Component } from 'react';
import axios from 'axios';
import GifCardPresent from './GifCardComponent.js';

class SearchFieldComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        serach: "",
        randomGif: {},
      };
}

handleChange = (event) => {
    this.setState({
        search: event.target.value
    })
}

handleClickRandom = (event) => {
    event.preventDefault();
    var url = "http://api.giphy.com/v1/gifs/random?api_key=gDhzcwsGQPMrsxeVQSFPZ2ozY4Yd4RXr";
    axios.get(url)
    .then(response => {
      var result = response.data.data;
      var newArray = [result];
      this.props.update(newArray);
        console.log (this.state.gifs);
    })
    .catch(err => console.log(err));
 
}
handleClickTrending = (event) => {
    event.preventDefault();
    var url = "http://api.giphy.com/v1/gifs/trending?api_key=gDhzcwsGQPMrsxeVQSFPZ2ozY4Yd4RXr";
    this.process(url);
}
handleClick = (event) => {
    event.preventDefault();
    var newString = this.state.search.replace(/\s+/g, '+');
    var url = `http://api.giphy.com/v1/gifs/search?q=${newString}&api_key=gDhzcwsGQPMrsxeVQSFPZ2ozY4Yd4RXr`;
    this.process(url);
  }

 process = (url) => {
    axios.get(url)
    .then(response => {
      var result = response.data.data;
      this.props.update(result);
        console.log (this.state.gifs);
    })
    .catch(err => console.log(err));
 } 

render() {

    return (
          <div>
              <form>
                  Search for Gifs: &nbsp;          
                  <button className = "button" onClick={this.handleClickTrending}>Trending</button>
                  <button className = "button" onClick={this.handleClickRandom}>Random</button>
                  <button className = "button" onClick={this.handleClick}>Search</button>
                  <input type='text' placeholder="Type Search" onChange={this.handleChange}/>

              </form>
          </div>
      );
    }
}



export default SearchFieldComponent;
