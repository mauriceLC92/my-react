import React from 'react';

const ProgressBar = ({progress}) => ( 
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%`, transitionDuration:`${progress*Math.floor(Math.random() * 100 +1)}ms` }}>
      </div>
    </div>
  )


export class RacetrackList extends React.Component{

    render(){

        if(this.props.run)
        {
            return(
                <ProgressBar
                progress = {100}
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

