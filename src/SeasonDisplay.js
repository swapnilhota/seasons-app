import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is cold",
        iconName: "snowflake"
    }
}

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
    const { text, iconName } = seasonConfig[season];

    return (
        <div>
            <i className={`massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;