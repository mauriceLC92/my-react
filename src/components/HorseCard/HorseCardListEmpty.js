import React from 'react';

const HorseCardListEmpty = (props) =>{
    return(
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
                <div className="header">
                    Please Click 'Generate Horses' above
                </div>
            </div>
        </div>
        
    );
}

export default HorseCardListEmpty;