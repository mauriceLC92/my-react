
import React from 'react';
import Team from './teamdata';
export class HorseCardListEmpty extends React.Component{
    render(){
        return(
            <div className="ui icon message">
                <i className="notched circle loading icon"></i>
                <div className="content">
                    <div className="header">
                        Please click 'Generate Horses' button above
                    </div>
                </div>
            </div>
        );
    }
}


// const teams = Team.team[0];