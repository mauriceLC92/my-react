import React from 'react';
import {Racetrack} from './Racetrack';
import {ProgressBar} from './ProgressBar';
import {BeginResetButtons} from './BeginResetButtons';


const transTime_1 = Math.floor(Math.random() * 4000);
const transTime_2 = Math.floor(Math.random() * 4000);
const transTime_3 = Math.floor(Math.random() * 4000);
const transTime_4 = Math.floor(Math.random() * 4000);

const greatestTime = Math.max(transTime_1,transTime_2,transTime_3,transTime_4);

export class RaceTrackListing extends React.Component{
    constructor(props){
        super(props);

        this.state = {beginRace: false}
    }

    startRace = () =>{
        this.setState({beginRace: true})
      }
    
      resetRace = () =>{
        this.setState({beginRace: false})
        
      }

    render(){

        if(this.props.run)
        {
            return(
                <BeginResetButtons onBegin = {this.beginRace}
                                    onClearRace = {this.clearRace}/>
            );
        }else{
            return(
                <div>...</div>
            );
        }
    }
}




