import React, { Component } from 'react';

class BackgroundHalf extends Component{

  render() {
  	var classes = "";
  	if (this.props.side === 'left') {
  		if (this.props.buttonSelected.image) classes = "background-half background-left selected-type";
  		else if(this.props.buttonSelected.gif) classes = "background-half background-left not-selected-type";
  		else if(this.props.buttonHover.image) classes = "background-half background-left hovered-type";
  		else if(this.props.buttonHover.gif) classes = "background-half background-left not-hovered-type";
  		else classes = "background-half background-left";
  	}else if(this.props.side === 'right'){
  		if (this.props.buttonSelected.image) classes = "background-half background-right not-selected-type";
  		else if(this.props.buttonSelected.gif) classes = "background-half background-right selected-type";
  		else if(this.props.buttonHover.image) classes = "background-half background-right not-hovered-type";
  		else if(this.props.buttonHover.gif) classes = "background-half background-right hovered-type";
  		else classes = "background-half background-right";
  	}
    return (
      <div className={classes}></div>
    );
  }
}

export default BackgroundHalf;