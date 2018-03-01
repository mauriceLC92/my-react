import React from 'react';
import {ProgressBar} from './ProgressBar';


export class Racetrack extends React.Component{

    render(){

        if(this.props.run)
        {
            return(
                <ProgressBar
                progress = {100}
                transitionDuration = {this.props.transitionDuration}
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
}

