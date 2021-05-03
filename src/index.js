import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {

        //when component loads

        console.log('Component rendered to screen');

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
                <SeasonDisplay lat={this.state.lat} />
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