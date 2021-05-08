import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {

    const [counters, setCounter] = useState([
        {id: 1, value: 0},
        {id: 2, value: 2},
        {id: 3, value: 4},
        {id: 4, value: 1},
    ])

    return (
        <div>
            {counters.map(item => 
                <Counter key={item.id} value={item.value}>  
                    <h4>Counter #{item.id}</h4>
                </Counter>
            )}
        </div>
    )
}

export default Counters;