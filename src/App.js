import React from 'react'
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import GifModal from './components/GifModal';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        };

    }

    openModal(gif) {            //npm install --save react-modal
        this.setState({
            modalIsOpen: true,  //The openModal method sets the selectedGif on state and also sets modalIsOpen to true
            selectedGif: gif
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    handleTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=pqQScDMrqbPAq4KJ99yGuufHRA5vpx8N`;
        
        //api-key generated from my https://developers.giphy.com/dashboard
        //unfortunately I don't know a way to pass it from .env file (from outside the source)

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    };

    render() {
        return (
            <div>
              <SearchBar onTermChange={term => this.handleTermChange(term)} />
              <GifList  gifs={this.state.gifs}
                        onGifSelect={selectedGif => this.openModal(selectedGif) } /> 
              <GifModal modalIsOpen={this.state.modalIsOpen}
                        selectedGif={this.state.selectedGif}
                        onRequestClose={ () => this.closeModal() } />
            </div>
            
        );
    }
}
export default App;