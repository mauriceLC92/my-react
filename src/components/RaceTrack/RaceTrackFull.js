import React from 'react';
import {Racetrack} from './Racetrack';



// let transTime_1 = Math.floor(Math.random() * 4000);
// let transTime_2 = Math.floor(Math.random() * 4000);
// let transTime_3 = Math.floor(Math.random() * 4000);
// let transTime_4 = Math.floor(Math.random() * 4000);



// let greatestTime = Math.min(transTime_1,transTime_2,transTime_3,transTime_4);
// let transTime_1 = Math.floor(Math.random() * 4000);
// let transTime_2 = Math.floor(Math.random() * 4000);
// let transTime_3 = Math.floor(Math.random() * 4000);
// let transTime_4 = Math.floor(Math.random() * 4000);

// let greatestTime = Math.max(transTime_1,transTime_2,transTime_3,transTime_4);

// const winner = () =>{
//     if(greatestTime === transTime_1)
//     {
//         alert("lane 1 is the Winner");
//     }
//     else if(greatestTime === transTime_2)
//     {
//         alert("lane 2 is the Winner");
//     }
//     else if(greatestTime === transTime_3)
//     {
//         alert("lane 3 is the Winner");
//     }
//     else{
//         alert("lane 4 is the Winner");
//     }
// }

export class RaceTrackFull extends React.Component{
    constructor(props){
        super(props);

        this.state = {beginRace: false}

        this.beginRace = this.beginRace.bind(this);
        this.clearRace = this.clearRace.bind(this);
    }

    beginRace = () =>{
        this.setState({beginRace: true})
    }

    clearRace = () =>{
        this.setState({beginRace: false})
    }


    // raceWinner=()=>{
    //     let winner = ""
    //         if(greatestTime === transTime_1)
    //         {
    //             alert("lane 1 is the Winner");
    //             console.log(transTime_1);
    //             winner = "lane 1";
    //         }
    //         else if(greatestTime === transTime_2)
    //         {
    //             alert("lane 2 is the Winner");
    //             console.log(transTime_2);
    //             console.log(greatestTime);
    //             winner = "lane 2";
    //         }
    //         else if(greatestTime === transTime_3)
    //         {
    //             alert("lane 3 is the Winner");
    //             console.log(transTime_3);
    //             winner = "lane 3";
    //         }
    //         else{
    //             alert("lane 4 is the Winner");
    //             console.log(transTime_4);
    //             winner = "lane 4";
    //         }
        
    //     return winner;
            
    
    // }

    render(){
        let transTime_1 = Math.floor(Math.random() * 4000);
        let transTime_2 = Math.floor(Math.random() * 4000);
        let transTime_3 = Math.floor(Math.random() * 4000);
        let transTime_4 = Math.floor(Math.random() * 4000);
        let smallestTime = Math.min(transTime_1,transTime_2,transTime_3,transTime_4);

        let raceWinner=()=>{
            let winner = ""
            if(smallestTime === transTime_1)
            {
                // alert("lane 1 is the Winner");
                console.log(transTime_1);
                winner = "lane 1";
            }
            else if(smallestTime === transTime_2)
            {
                // alert("lane 2 is the Winner");
                console.log(transTime_2);
                console.log(smallestTime);
                winner = "lane 2";
            }
            else if(smallestTime === transTime_3)
            {
                // alert("lane 3 is the Winner");
                console.log(transTime_3);
                winner = "lane 3";
            }
            else{
                // alert("lane 4 is the Winner");
                console.log(transTime_4);
                winner = "lane 4";
            }
            
            return winner;
                
        }

        console.log('smallestTime ',smallestTime);
        console.log('transTime_1 ',transTime_1);
        console.log('transTime_2 ',transTime_2);
        console.log('transTime_3 ',transTime_3);
        console.log('transTime_4 ',transTime_4);
        let laneWinner = raceWinner();

        return(
            <div className="main-wrapper">
                <div className="ui medium buttons">
                  <button id="startButton" className="positive ui button" onClick={this.beginRace}>Start Race</button>
                  <div className="or"></div>
                  <button className="negative ui button" onClick={this.clearRace}>Reset Race</button>
                </div>

                <div className="raceTrack">
                    <div className="track">            
                        <Racetrack begin = {this.state.beginRace} transitionDuration = {transTime_1} win = {laneWinner}/>
                    </div>
                    <div className="track">             
                        <Racetrack begin = {this.state.beginRace} transitionDuration = {transTime_2} win = {laneWinner}/>
                    </div>
                    <div className="track">     
                        <Racetrack begin = {this.state.beginRace} transitionDuration = {transTime_3} win = {laneWinner}/>
                    </div>
                    <div className="track">
                        <Racetrack begin = {this.state.beginRace} transitionDuration = {transTime_4} win = {laneWinner}/>
              </div>
            </div>

            </div>
        );
    }
}