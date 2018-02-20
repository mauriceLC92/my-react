import React from 'react';
import HorseCard from './HorseCard';
import horseCard from '../HorseCard/team.json'

export class HorseCardList extends React.Component{

    render(){
        const horseComponents = horseCard.map((horse) => (
            <HorseCard
            id = {horse.id}
            horseAvatar={horse.avatar_url}
            horseLogin={horse.login}
            horseGitUrl={horse.html_url}
            />
        ));

        return(
            <div>
                
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
                {horseComponents[Math.floor(Math.random() * horseComponents.length +1)]}
            </div>
        );
    }
}   