
import React from 'react';
import team from '../App/teamdata';
import {Product} from './Product';

export class ProductList extends React.Component {
    
    render() {
      const teams = team[0];
      return (
        <div className='ui unstackable items'>
          <Product
            id = {teams.id}
            horseAvatar={teams.avatar_url}
            horseLogin={teams.login}
            horseGitUrl={teams.html_url}
            transistion = {teams.transisitonTime}
            />
        </div>
      );
    }
  }
