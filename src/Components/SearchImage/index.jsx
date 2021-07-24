import React from 'react';
import {IconeTema} from '../UI';

import restaurante from '../../assets/images/alimentacao.svg';
import utilidades from '../../assets/images/utilidades.svg';
import transporte from '../../assets/images/transporte.svg';
import saude from '../../assets/images/saude.svg';
import outros from '../../assets/images/outros.svg';

export const SearchImage = ({type}) => {
    const mapaImagem = {
        Restaurante: <IconeTema src={restaurante} alt="restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="utilidades"/>,
        Transporte: <IconeTema src={transporte} alt="transporte" />,
        Saude: <IconeTema src={saude} alt="saude" />,
        Outros: <IconeTema src={outros} alt="outros" />,
    }

    return mapaImagem[type] || mapaImagem['Outros'];
}