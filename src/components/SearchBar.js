import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // prevent form from automatically submitting on user hitting return
  // arrow function for binding! or 'this' will refer to undefined
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  // controlled component. see https://reactjs.org/docs/forms.html
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
