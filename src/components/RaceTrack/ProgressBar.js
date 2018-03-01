import React from 'react';

export class ProgressBar extends React.Component{

   
  render() {


        const lane_num = this.props.winRace;
      return (
          <div className="progressbar">
              <div
                  className="progress"
                  style={{ width: `${this.props.progress}%`, transitionDuration:`${this.props.transitionDuration}ms` }}
              />
          </div>

          
      );
  }
}
