import React from 'react';
import './Card.css';
// eslint-disable-next-line
export default props =>
<div className="Card"  style={{borderColor: props.color || '#000'}}>
    <div className="Conteudo" >
        {props.children}
    </div>

   <div className="Footer" style={{backgroundColor: props.color || '#000'}}>
        {props.title}
   </div>
</div>