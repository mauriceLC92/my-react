import React from 'react';
import HorseCard from './HorseCard';
import horseCard from '../HorseCard/team.json'


const horseComponents = horseCard.map((horse) => (
    <HorseCard
    id = {horse.id}
    horseAvatar={horse.avatar_url}
    horseLogin={horse.login}
    horseGitUrl={horse.html_url}
    />
));
export class HorseCardList extends React.Component{
    
    render(){
        //This is where const horseComponents orgially was
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
