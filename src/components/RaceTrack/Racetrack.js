import React from 'react';
import {ProgressBar} from './ProgressBar';


export class Racetrack extends React.Component{
    constructor(props){
        super(props);

        this.state = {winner: "blank"}
    }

    render(){
        // console.log(this.props.win);
        let winRace = this.props.win;
        // let raceWinner=()=>{
        //     let winner = ""
        //     if(greatestTime === transTime_1)
        //     {
        //         // alert("lane 1 is the Winner");
        //         console.log(transTime_1);
        //         winner = "lane 1";
        //     }
        //     else if(greatestTime === transTime_2)
        //     {
        //         // alert("lane 2 is the Winner");
        //         console.log(transTime_2);
        //         console.log(greatestTime);
        //         winner = "lane 2";
        //     }
        //     else if(greatestTime === transTime_3)
        //     {
        //         // alert("lane 3 is the Winner");
        //         console.log(transTime_3);
        //         winner = "lane 3";
        //     }
        //     else{
        //         // alert("lane 4 is the Winner");
        //         console.log(transTime_4);
        //         winner = "lane 4";
        //     }
            
        //     return winner;
                
        // }

        // console.log(this.props.win)

        // let laneWinner = raceWinner();

        if(this.props.begin)
        {
            return(
                <ProgressBar
                progress = {100}
                transitionDuration = {this.props.transitionDuration}
                winRace = {winRace}
                />
            );
        }
        else{
            return(
                <ProgressBar
                progress = {0}
                
                 />
                /* <div>Horses waiting to start</div> */
            )
        }
            
    }
}

