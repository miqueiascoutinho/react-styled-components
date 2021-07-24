import React from 'react';
import themeOff from '../../assets/images/themeOff.svg';
import themeOn from '../../assets/images/themeOn.svg';
import {Icone} from '../UI';

const SwitcherTema = ({ theme }) => {
    return (
            <Icone src={theme ? themeOff : themeOn}/>
    );
}

export default SwitcherTema;