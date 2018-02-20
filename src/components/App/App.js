import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';


import { EditableHorseList } from '../HorseCard/EditableHorseList';
import { LeaderBoard } from '../Dashboard/LeaderBoard';
import Racetrack from '../RaceTrack/RacetrackList';
import {StartAndStopButtons} from '../Dashboard/StartAndStopButtons';
import {GenerateClearButtons} from '../Dashboard/GenerateClearButtons';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {horseListEmpty: false, run: false};

  }
  
  renderHorseList = () => {
    this.setState({horseListEmpty: true});

  }

  clearHorseList = () => {
    this.setState({horseListEmpty: false});
  }

  startRace = () =>{
    this.setState({run: true})
  }

  resetRace = () =>{
    this.setState({run: false})
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kurtosys Horse Race Challenge</h1>
        </header>
        <div>
        <i className="wheelchair icon"></i>...........................................KURTOSYS 1000M Pixel Dash.....................................<i className="wheelchair icon"></i>
        </div>
        <div className='ui four column grid'>
          <div className='row'>
            <div className='column'>
              <GenerateClearButtons 
              onGen = {this.renderHorseList}
              onClear = {this.clearHorseList}/>
            </div>
            <div className='columnResult'>
              <LeaderBoard />
            </div>
            <div className='column'>
              <h2 className='Heading'>Kurtosys Race Track</h2>
            </div>
            <div className='column'>
              <StartAndStopButtons 
              onStart = {this.startRace}
              onStop = {this.resetRace}/>
            </div>
          </div> 
          <div className='column'>
            <EditableHorseList 
              horseListEmpty={this.state.horseListEmpty} />
          </div>
          <div className='column'>
            <div className="raceTrack">
              <div className="track">
              <Racetrack run = {this.state.run} transitionDuration = {Math.floor(Math.random() * 4000)}/>
              </div>
              <div className="track">
              <Racetrack run = {this.state.run} transitionDuration = {Math.floor(Math.random() * 4000)} />
              </div>
              <div className="track">
              <Racetrack run = {this.state.run} transitionDuration = {Math.floor(Math.random() * 4000)}/>
              </div>
              <div className="track">
              <Racetrack run = {this.state.run} transitionDuration = {Math.floor(Math.random() * 4000)}/>
              </div>
            </div>
          </div>
          {/* <div className='column'>...
          </div>
          <div className='column'>...
          </div> */}
        </div>
      </div>
    );
  }
}