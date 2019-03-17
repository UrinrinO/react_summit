import React from 'react';
import Carrousel from './carousel';
import TimeUntil from './TimeUntil'

const Featured = () => {
    return (
        <div style= {{position: 'relative'}}>

            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                   The Summit
                </div>
            </div>

            <TimeUntil/>
        </div>
    )
}

export default Featured;