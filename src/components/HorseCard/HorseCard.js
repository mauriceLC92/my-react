import React from 'react';

const HorseCard = (props) => {

    return(
        <div className='ui card'>
                <div className='ui small circular image' >
                    <img src={props.horseAvatar} alt="github avatar"/>
                </div>
                <div className='middle aligned content'>
                    <a className='ui tiny header' href={props.horseGitUrl}>{props.horseLogin}</a>
                    {/* <div className='meta'>
                        <span className='description'> Race XP: 2 years</span>
                    </div> */}
                    {/* <div className='description'>
                        Software developer: Implementation team
                    </div> */}
                </div>
                {/* <div className='left aligned extra content'> 
                    <a>
                        <i className="trophy icon"></i>
                        2 wins
                    </a>
                </div> */}
            </div>
    );

};

export default HorseCard;