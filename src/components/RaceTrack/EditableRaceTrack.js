import React from 'react';
import {RaceTrackFull} from './RaceTrackFull';
import { RaceTrackEmpty } from './RaceTrackEmpty';


export class EditableRaceTrack extends React.Component{
    render(){

        if(this.props.run)
        {
            return(
                <RaceTrackFull />
            );
        }else {
            return(
                <RaceTrackEmpty />
            );
        }
    }
}