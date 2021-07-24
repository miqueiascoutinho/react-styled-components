import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .destaque{
        font-weight: bold;
    }
`

export default ({item}) => {
    return (
        <Item>
            <p className="destaque">{item.type}</p>
            <p>{item.from}</p>
            <p>{item.value}</p>
        </Item>
    );
}