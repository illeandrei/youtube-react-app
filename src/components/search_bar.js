import React, { Component } from 'react';

//class component (it is controlled and aware of state - different from functional components)
// fun fact - functional component can contain a class based cmp.
class SearchBar extends Component {
    constructor(props) {
        //super is called to initialize and set up all the variables/dependencies of the parent class
        // of the class that our class extends
        super(props);

        this.state = { term: '' };
    }

    render() {
        //controlled component - through state
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;