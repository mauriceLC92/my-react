import React from 'react';

const ProgressBar = ({progress, transitionDuration}) => ( 
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%`, transitionDuration:`${transitionDuration}ms` }}>
      </div>
    </div>
  )

  export default ProgressBar;