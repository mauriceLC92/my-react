import React from 'react';
import { HorseCardList } from '../HorseCard/HorseCardList';
import { HorseCardListEmpty } from '../HorseCard/HorseCardListEmpty';

export class GenerateButtons extends React.Component{

    renderHorseList = () =>{
        this.setState({isOpen: false});
    }

    render(){
        if(this.props.isOpen){
            return(
                <HorseCardListEmpty />
            )
        }
        return(
            <div className="ui medium buttons">
                <button className="positive ui button" onClick={this.renderHorseList}>Generate Horses</button>
                <div className="or"></div>
                <button className="ui button" >Clear Horses</button>
            </div>
        );
    }
}