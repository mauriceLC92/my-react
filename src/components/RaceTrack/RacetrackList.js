import React from 'react';

import { Racetrack } from "./Racetrack";

const ProgressBar = ({progress}) => ( 
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%`}}>
      </div>
    </div>
  )
export class RacetrackList extends React.Component{

    render(){

        if(this.props.run)
        {
            return(
                <ProgressBar
                progress = {Math.floor(Math.random() * 100 +1)}
                 />
            );
        }
        else{
            return(
                <div>Horses waiting to start</div>
            )
        }
            
    }
}

