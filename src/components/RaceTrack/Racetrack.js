import React from 'react';

export class Racetrack extends React.Component{

    render(){
        return(
            
            <div className="progressbar">
                <div className="progress" style={{width: `${this.props.progress}%`}}>
                    {/* {this.props.run} */}
                </div>
            </div>
        );
    }
}


