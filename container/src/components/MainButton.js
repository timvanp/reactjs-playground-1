import React, { Component } from 'react';

class MainButton extends Component{

  handleMouseEnter(){
  	this.props.onMouseEnter(this.props.type);
  }

  handleMouseLeave(){
  	this.props.onMouseLeave(this.props.type);
  }

  handleClick(){
  	this.props.onClick(this.props.type);
  }

  render() {
  	var text = "";
	if (this.props.type === 'image') {
	  text = 'Image';
	}else if(this.props.type === 'gif'){
	  text = 'GIF';
	}
    return (
      <button className="main-button" onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()} onClick={() => this.handleClick()}>{text}</button>
    );
  }
}

export default MainButton;