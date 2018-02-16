

import React from 'react';
import {GenerateButtons} from '../Dashboard/GenerateButtons';
import {StartStopButtons} from '../Dashboard/StartStopButtons';
import { HorseCardList } from '../HorseCard/HorseCardList';

export class RaceDashboard extends React.Component{
    render(){
        return(
            <div className='ui grid'>
                <div className='four wide column'>
                    <GenerateButtons 
                    isOpen={false}/>
                </div>
                <div className='four wide column'></div>
                <div className='four wide column'></div>
                <div className='four wide column'>
                    <StartStopButtons />
                </div>
                <HorseCardList />
            </div>
            
        );
    }
}