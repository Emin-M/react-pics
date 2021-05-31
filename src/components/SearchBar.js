import React from "react";

class SearchBar extends React.Component {
   state = {term: ''}

   onFormSubmit = (e) => {
       e.preventDefault();
       this.props.onSubmit(this.state.term)
   }

    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="form-group">
                    <label htmlFor="text">Image Search</label>
                    <input id="text" className="form-control" type="text" value={this.state.term}
                    onChange={(e)=>this.setState({term: e.target.value})}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;