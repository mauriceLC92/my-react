import React from 'react';

const HorseCardListEmpty = (props) =>{
    return(
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
                <div className="header">
                    Waiting to generate Horses
                </div>
            </div>
        </div>
        
    );
}

export default HorseCardListEmpty;