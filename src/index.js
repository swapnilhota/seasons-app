import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {

        window.navigator.geolocation.getCurrentPosition(
            //success callback
            (position) => console.log(position),
            //error
            (err) => console.log(err)
        );

        return (
            <div>Latitude: </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);