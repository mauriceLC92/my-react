import React from 'react';

export class HorseCardListEmpty extends React.Component{
    render(){
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
}