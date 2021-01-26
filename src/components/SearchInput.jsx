import React from "react";

class SearchInput extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>
          Video Search
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3629/3629561.svg?token=exp=1611686302~hmac=fa8eb6e8f654371a382b5ad8de8f9c7a"
            alt="video"
          />{" "}
        </h1>
        <div class="ui action input inputButton">
          <input
            value={this.state.term}
            type="text"
            placeholder="Video Search..."
            onChange={this.onInputChange}
          />
          <button class="ui button">
            <i style={{ color: "red" }} class="video icon"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default SearchInput;
