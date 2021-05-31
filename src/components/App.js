import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{
    state = {images: []};

    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos',{
            params: { query: term }
        })/*.then((response)=>{
            console.log(response.data.results);
        });*/
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="container">
                 <div className="container border mt-3">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                 </div>
                 <div className="my-3">
                    <ImageList images={this.state.images} />
                 </div>
            </div>
        ) 
    }
}

export default App;