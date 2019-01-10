import React, { Component } from 'react';
import SearchFieldComponent from './SearchFieldComponent.js';
import GifCardPresent from './GifCardComponent.js';
import axios from 'axios';


class AppComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          URL : "http://api.giphy.com/v1/gifs/trending?api_key=gDhzcwsGQPMrsxeVQSFPZ2ozY4Yd4RXr",
          gifs : [],
          date : "YYYY",
        };
        this.compare= this.compare.bind(this);
    };

    updateGif = (newGifs) => {
      this.setState ({gifs : newGifs});
    }
    //this.up
    componentDidMount() {
        this.fetchGif();
    }

    fetchGif = () => {
      axios.get(this.state.URL)
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

    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        date : event.target.value
      })
    }

// 2017-00-00 00:00:00
    handleClick = (event) => {
      event.preventDefault();
      var newGif = this.state.gifs.filter(element =>parseFloat(element.import_datetime.substring(0,4)) >= parseFloat( this.state.date.substring(0,4))   );

        this.setState({
        gifs : newGif,
        date : "YYYY",
      })
    }

    compare(a,b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }

    handleClickSort = (event) => {
      event.preventDefault();
      var newGif = this.state.gifs.sort(this.compare);
      this.setState({
        gifs : newGif
      })
    }


  render() {
    for (var i=0; i< this.state.gifs.length; i++){
      console.log (this.state.gifs[i].import_datetime);
    }
    console.log(this.state.gifs.length);

    var allGifs = this.state.gifs.length ? (
      <div>
          {this.state.gifs.map((elem) =>
      <GifCardPresent gif = {elem.images.fixed_height_small.url} title = {elem.title} key = {elem.id}/>)}
      </div>
    ) : (null);

    return (
      <div > <SearchFieldComponent update = {this.updateGif}/> <br/>
      Filter by:  <br/>
      <input type='text' value={this.state.date}  onChange={this.handleChange}/>
      <button className = "button"  onClick={this.handleClick}>Filter by Date</button> <br/><br/>
      Sort by:
      <button className = "button" onClick={this.handleClickSort}>Sort by Title</button>
      {allGifs}
       
      </div>
    );
  }
}

export default AppComponent;
