import React from 'react';
import HorseCardList from './HorseCardList';
import HorseCardListEmpty from './HorseCardListEmpty';

export class EditableHorseList extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.horseListEmpty === this.props.horseListEmpty)
        {
            return false;
        }
        else{
            return true;
        }
    };
    render(){

        if(!this.props.horseListEmpty){
            return(
                <HorseCardListEmpty />
            );
        } else {
            return(
                <HorseCardList />
            );
        }
        
    }
}
