import React from 'react';
import Primeiro from './basicos/Primeiro';
import ComParams from './basicos/ComParametros';
import ComFilhos from './basicos/ComFilhos';
import Repeticao from './basicos/Repeticao';
import Condicional from './basicos/Condicional';
import Pai from './comunicacao/direta/Pai';
import InputText from './inputs/InputText';
import GeradorCPF from './cpf/GeradorCPF';

import Card from './layout/Card';
import './App.css';

// eslint-disable-next-line
export default props =>
<div className="App">
        <Card>
            <GeradorCPF />
        </Card>
        <Card title="7 Comunicação direta" color="#FA6900">
            <Pai nome="Gabriel" sobreNome="Ferreira"/> 
        </Card>

        <Card title="1" color="#FA6900">
            <Primeiro />
        </Card>

        <Card title="2" color="#E94C6F">
            <ComParams title="Titulo" subTitle="subtitulo"/> 
        </Card>

        <Card title="3" color="#8C4646">
            <ComFilhos title="filhos">
                <ul>
                    <li>Ana</li>
                    <li>carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card title="4" color="#DC403B">
            <ComFilhos title="Repetição produtos">
                <Repeticao />
            </ComFilhos>
        </Card>

        <Card title="5" color="#E19D29">
            <Condicional numero = {7} />
        </Card>

        <Card title="6" color="#A3D39C">
            <Condicional numero = {10} />
        </Card>
</div>
