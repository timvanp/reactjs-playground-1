import React, { Component } from 'react';
import './App.css';
import {getImages, getGifs} from './services';
import {MediaContainer, MainButton, SearchInput, BackgroundHalf} from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: {
        image: false,
        gif: false,
      },
      selected: {
        image: false,
        gif: false,
      },
      media: [],
      searchWord: "",
      message: "",
      emptyClick: false,
    };
  }

  handleResponse(response){
    if (response.length === 0) {
      this.setState({
        message: "Please provide us another serch keyword, because we couldn't find any match in our database!"
      });
    };
    this.setState({
      media: response.map(function(image) {
        var heightHelper = 200 / +image.width * +image.height;
        return {thumbnail: image.thumb, thumbnailWidth: 200, thumbnailHeight: heightHelper, src: image.full};
      }),
    });
  }

  handleClick(type){
    if (this.state.searchWord.length === 0) {
      this.setState({
          message: "Please provide us a serch keyword!",
          emptyClick: true,
        });
    }else{
      this.setState({
        message: "",
        emptyClick: false,
      });

      if (type === 'image') {

        getImages((response) => this.handleResponse(response), this.state.searchWord);
        
        this.setState({
          selected: {
            image: true,
            gif: false,
          }
        });
        
      }else if(type === 'gif') {

        getGifs((response) => this.handleResponse(response), this.state.searchWord);
        
        this.setState({
          selected: {
            image: false,
            gif: true,
          }
        });
      };
    }
  }

  handleMouseEnter(type){
    if (type === 'image') {
      this.setState({
        hover: {
          image: true,
          gif: false,
        }
      });
    }else if(type === 'gif') {
      this.setState({
        hover: {
          image: false,
          gif: true,
        }
      });
    };
  }

  handleMouseLeave(type){
    this.setState({
      hover: {
        image: false,
        gif: false,
      }
    });
  }

  handleKeyUp(searchWord){
    this.setState({
      searchWord: searchWord
    });

    if (!searchWord) {
      this.setState({
        selected: {
          image: false,
          gif: false,
        },
        media: [],
        message: "",
      });
    }else{
      this.setState({
        emptyClick: false,
      });
    }
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="background-container">
          <BackgroundHalf buttonSelected={this.state.selected} buttonHover={this.state.hover} side="left"/>
          <BackgroundHalf buttonSelected={this.state.selected} buttonHover={this.state.hover} side="right"/>
        </div>  
        <div className="content-container">
          <div id="search-form-container" className="container">
            <div className="title-text">Search by the word</div>
            <SearchInput emptyClick={this.state.emptyClick} onKeyUp={(searchWord) => this.handleKeyUp(searchWord)}/> 
            <div className="title-text">for</div>
            <MainButton onMouseEnter={(type) => this.handleMouseEnter(type)} onMouseLeave={(type) => this.handleMouseLeave(type)} onClick={(type) => this.handleClick(type)} type="image"/>
            <MainButton onMouseEnter={(type) => this.handleMouseEnter(type)} onMouseLeave={(type) => this.handleMouseLeave(type)} onClick={(type) => this.handleClick(type)} type="gif"/>
        </div>
        <div className="container">
            <MediaContainer message={this.state.message} media={this.state.media}/>
        </div>
        </div>
      </div>
    );
  }
}


export default App;
