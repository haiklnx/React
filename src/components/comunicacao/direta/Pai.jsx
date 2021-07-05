import React from 'react';
import Filho from './Filho';

export default props =>
    <div>
        <Filho sobreNome={props.sobreNome}> com props.sobreNome</Filho>
        <Filho {...props}> com ...props</Filho>
    </div>