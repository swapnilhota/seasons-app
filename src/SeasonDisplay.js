import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        if (lat > 0) {
            //northern hemisphere
            return 'summer';
        } else {
            //southern hemisphere
            return 'winter';
        }
    } else {
        if (lat > 0) {
            return 'winter';
        } else {
            return 'summer';
        }
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);

    return (
        <div>Season Display</div>
    );
};

export default SeasonDisplay;