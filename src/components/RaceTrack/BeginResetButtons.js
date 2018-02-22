import React from 'react';

export class BeginResetButtons extends React.Component{
    constructor(props) {
        super(props);
    
        this.beginRace = this.beginRace.bind(this);
        this.clearRace = this.clearRace.bind(this);
      }

    beginRace = () =>{
        this.props.onBegin(true)
    }

    clearRace = () =>{
        this.props.onClearRace(false)
    }

    render(){
        return(
            <div className="ui medium buttons">
                  <button id="startButton" className="positive ui button" onClick={this.beginRace}>Start Race</button>
                  <div className="or"></div>
                  <button className="negative ui button" onClick={this.clearRace}>Reset Race</button>
            </div>
        );
    }
}