import React from 'react';
import {HorseCard} from './HorseCard';
import horseCard from '../HorseCard/team.json'
import team from '../App/teamdata';



const horseComponents = team.map((horse) => (
    <HorseCard
    id = {horse.id}
    horseAvatar={horse.avatar_url}
    horseLogin={horse.login}
    horseGitUrl={horse.html_url}
    transistion = {horse.transisitonTime}
    />
));

// const horseComponents = horseCard.map((horse) => (
//     <HorseCard
//     id = {horse.id}
//     horseAvatar={horse.avatar_url}
//     horseLogin={horse.login}
//     horseGitUrl={horse.html_url}
//     transistion = {teams.transisitonTime}
//     />
// ));
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
