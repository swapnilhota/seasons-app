import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props); //reference to parents constructor function

        // always initialise state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            //success callback
            (position) => {
                //to update state we call setState
                this.setState({ lat: position.coords.latitude });
            },
            //error
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidMount() {
        console.log('Component rendered to screen');
    }

    componentDidUpdate() {
        console.log('Component updated');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>Latitude: {this.state.lat}</div>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);