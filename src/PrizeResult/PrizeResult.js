import React from 'react';

import Aux from '../Auxilary/Auxilary';

const prizeResult = (props) => {
    return (
        <Aux>
            <h2> Congratulations!!! </h2>
            <p>You have won: </p>
            <h1>{props.prize}</h1>
        </Aux>
    )
}

export default prizeResult;