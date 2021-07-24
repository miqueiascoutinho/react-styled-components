import React from 'react';
import { Box } from '../UI';
import Items from '../Items';
import {extratoLista} from '../../info';


export default () => {
    return (
        <Box>
            {extratoLista.updates.map(item => (
                <Items key={item.id} item={item} />
            ))}            
        </Box>
    );
}