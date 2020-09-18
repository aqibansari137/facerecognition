import React from 'react';
import './FaceRecognition.css'
const FaceRecognition=({box,imageUrl})=>{
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' height='auto' width='500px' src={imageUrl}></img>
                <div className='bounding-box' style={{top:box.toprow,right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}>

                </div>
            </div>
        </div>
    );
}
export default FaceRecognition;