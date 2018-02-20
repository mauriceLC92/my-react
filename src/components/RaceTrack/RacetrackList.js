import React from 'react';
import ProgressBar from './ProgressBar';

const Racetrack = (props) =>{
    if(props.run)
        {
            return(
                <ProgressBar
                progress = {100}
                transitionDuration = {props.transitionDuration}
                 />
            );
        }
        else{
            return(
                <ProgressBar
                progress = {0}
                 />
            )
        }
}

export default Racetrack;
