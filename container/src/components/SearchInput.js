import React, { Component } from 'react';

class SearchInput extends Component{
  handleKeyUp(event){
    const searchWord = event.target.value;
    this.props.onKeyUp(searchWord);
  }

  render() {
    var inputClasses = "main-textbox";
    if (this.props.emptyClick === true) {
      inputClasses += " shake-effect";
    }
    return (
      <input ref="input" className={inputClasses} type="text" onKeyUp={(event) => this.handleKeyUp(event)}/>
    );
  }
}

export default SearchInput;