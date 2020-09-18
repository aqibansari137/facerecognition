import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Brain.png'

const Logo=()=>{
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: '100%', width: 150 }} >
                <div className="Tilt-inner shadow-2 pa3" > 
                    <img style={{paddingTop:'6px'}}alt='Brain Logo' src={brain}></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;