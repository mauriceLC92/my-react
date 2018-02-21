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
                /* <div>Horses waiting to start</div> */
            )
        }
            
    }
}

// const Racetrack = (props) =>{
//     if(props.run)
//         {
//             return(
//                 <ProgressBar
//                 progress = {100}
//                 transitionDuration = {props.transitionDuration}
//                  />
//             );
//         }
//         else{
//             return(
//                 <ProgressBar
//                 progress = {0}
//                  />
//             )
//         }
// }

// export default Racetrack;
