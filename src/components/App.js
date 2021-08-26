import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  //callback method
  onSearchSubmit = async (term) => {
    //first one is PaymentAddress, the second one is the object to customize the request
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //check the network section with GET to see the structure
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* no need have to call onSubmit, can be called anything */}
        <SearchBar onSubmitTest={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
