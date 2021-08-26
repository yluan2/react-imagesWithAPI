import React from "react";

//use classComponetn since the state is needed
class SearchBar extends React.Component {
  state = { term: "Hi there!" };

  onFormSubmit = (event) => {
    event.preventDefault();
    //call the props passed from the App
    this.props.onSubmitTest(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* a method passed to an event handler, no need to have () */}
        {/* must call onSubmit here since it's the form element */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* pass reference on the input change method  => call back function */}
            {/* dont want to call when rendered but input can call that function sometime in the future */}
            <input
              type="text"
              //input is going to show in the textbox  Controlled version
              //no need to get info from DOM world when asking what's the value of inputs
              value={this.state.term}
              // the time called setState, rerender will work
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
