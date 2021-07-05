import React from 'react';
import produtos from'../../data/Products';
// eslint-disable-next-line
export default props =>{

    function getProdutos(){
        return produtos.map(prod => {
            return (
                <li key={prod.id}>
                    {prod.id} - {prod.nome} - {prod.preco}
                </li>
            )
        })
    }

    return (
        <div>    
            <h2>Repeticao</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>    
    )
}