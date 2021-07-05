import React from 'react';
import IF from './IF';
// eslint-disable-next-line
export default props =>{
    return(
        <>
            <h2>Numero é {props.numero}</h2>
            <IF teste={props.numero % 2 === 0} >
                <span>Par</span> :
            </IF>    
            
            <IF teste={props.numero % 2 === 1} >
                <span>Ímpar</span> :
            </IF>    
        </>
    )
}