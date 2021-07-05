import React from 'react';
// eslint-disable-next-line
export default props =>{
    return(
        <>
            <h2>Numero é {props.numero}</h2>
            {
                props.numero % 2 === 0 ?
                <span>Par</span> :
                <span>Ímpar</span>
            }
        </>
    )
}