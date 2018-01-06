import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class MediaContainer extends Component{

  render() {
    if (this.props.media.length > 0) {
      return (
        <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            border: "none",
            overflow: "auto",
            textAlign: "center",
            background: "rgba(10,10,10,0.5)",
            margin: "0 0 30px 0"
        }}>
            <Gallery
                images={this.props.media}
                enableImageSelection={false}
            />
        </div>
      );
    }else if(this.props.message.length > 0){
      return (
        <div className="error-message">{this.props.message}</div>
      );
    }else{
      return <div></div>;
    }
    
  }
}

export default MediaContainer;