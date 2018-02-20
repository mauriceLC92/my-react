import React from 'react';
import HorseCard from './HorseCard';
import horseCard from '../HorseCard/team.json'

const HorseCardList = (props) =>{

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

export default HorseCardList;