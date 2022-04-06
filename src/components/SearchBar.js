import React from 'react';

class SearchBar extends React.Component {
    constructor() {                         //runs automatically when the class is initialized
        super();                            //lets us access this.state
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Wprowadź tekst, aby wyszukać gif!" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;