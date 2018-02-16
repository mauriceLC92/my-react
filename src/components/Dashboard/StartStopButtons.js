import React from 'react';

export class StartStopButtons extends React.Component{
    render(){
        return(
            <div className="ui medium buttons">
                <button className="positive ui button">Start Race</button>
                <div className="or"></div>
                <button className="negative ui button">Stop</button>
            </div>
        );
    }
}