import React from 'react';
import logo from '../../images/logo.svg';

export class Header extends React.Component{
    render(){
        return(
            <div className="main-header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Kurtosys Horse Race Challenge</h1>
            </header>
            <div>
            <i className="wheelchair icon"></i>...........................................KURTOSYS 1000M Pixel Dash.....................................<i className="wheelchair icon"></i>
            </div>
            </div>
        );
    }
}