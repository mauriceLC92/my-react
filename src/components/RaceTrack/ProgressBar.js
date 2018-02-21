import React from 'react';

export class ProgressBar extends React.Component{
  render() {
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


// const ProgressBar = ({progress, transitionDuration}) => ( 
//     <div className="progressbar">
//       <div className="progress" style={{ width: `${progress}%`, transitionDuration:`${transitionDuration}ms` }}>
//       </div>
//     </div>
//   )

//   export default ProgressBar;