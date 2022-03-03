import React from 'react';
import ContainerTwoimg from './images/laiqa.jpg';


export default function ContainerTwo() {
return (
<>
    <div className='containerTwo'>
        <div className='one'>
            <div className='left'>
            <img src={ContainerTwoimg} />
            </div>
            <div className='right'>
                <h2>Organic</h2>
                <p>laiqa products are made with a commitment to using 100% natural ingredients that are good</p>
            </div>
        </div>
    </div>
</>
)
}
