import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import {RaceDashboard} from '../Dashboard/RaceDashboard';
import {HorseCard} from '../HorseCard/HorseCard';
import {HorseCardList} from '../HorseCard/HorseCardList';
import './App.css';
import { EditableHorseList } from '../HorseCard/EditableHorseList';
import {HorseCardListEmpty} from '../HorseCard/HorseCardListEmpty';
import { LeaderBoard } from '../Dashboard/LeaderBoard';
import { Racetrack } from '../RaceTrack/Racetrack';
import { RacetrackList } from '../RaceTrack/RacetrackList';

const ProgressBar = ({progress}) => ( 
  <div className="progressbar">
    <div className="progress" style={{ width: `${progress}%`}}>
    </div>
  </div>
)
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: 0, horseListEmpty: false, run: false};

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
              <div className="ui medium buttons">
                   <button className="positive ui button" onClick={this.renderHorseList}>Generate Horses</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={this.clearHorseList} >Clear Horses</button>
              </div>
            </div>
            <div className='columnResult'>
              <LeaderBoard />
            </div>
            <div className='column'>
              <h2 className='Heading'>Kurtosys Race Track</h2>
            </div>
            <div className='column'>
              <div className="ui medium buttons">
                  <button className="positive ui button" onClick={this.startRace}>Start Race</button>
                  <div className="or"></div>
                  <button className="negative ui button" onClick={this.resetRace}>Reset</button>
              </div>
            </div>
          </div> 
          <div className='column'>
            <EditableHorseList 
              horseListEmpty={this.state.horseListEmpty} />
          </div>
          <div className='column'>
            <div className="raceTrack">
              <div className="track">
              {/* <ProgressBar progress={this.state.progress} /> */}
              <RacetrackList run = {this.state.run} />
              </div>
              <div className="track">
              {/* <ProgressBar progress={this.state.progress} /> */}
              <RacetrackList run = {this.state.run} />
              </div>
              <div className="track">
              {/* <ProgressBar progress={this.state.progress} /> */}
              <RacetrackList run = {this.state.run}/>
              </div>
              <div className="track">
              {/* <ProgressBar progress={this.state.progress} /> */}
              <RacetrackList run = {this.state.run}/>
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