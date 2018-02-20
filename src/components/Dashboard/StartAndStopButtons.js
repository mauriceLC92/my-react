import React from 'react';


export class StartAndStopButtons extends React.Component{
    constructor(props){
        super(props);

        this.startRace = this.startRace.bind(this);
        this.resetRace = this.resetRace.bind(this);
    }

    startRace = () =>{
        // this.setState({run: true})
        this.props.onStart(true)
    }

    resetRace = () =>{
        // this.setState({run: true})
        this.props.onStop(false)
    }
    
    render(){
        return(
            <div className="ui medium buttons">
                  <button id="startButton" className="positive ui button" onClick={this.startRace}>Start Race</button>
                  <div className="or"></div>
                  <button className="negative ui button" onClick={this.resetRace}>Reset</button>
            </div>
        );
    }
}