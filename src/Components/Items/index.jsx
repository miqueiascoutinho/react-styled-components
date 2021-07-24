import React from 'react';
import styled from 'styled-components';
import Item from '../Item';
import { SearchImage } from '../SearchImage';

const Items = styled.div`
    border-radius: 10px;
    justify-content: space-around;
    border: none;
    align-items: center;
    display: flex;
    padding: 10px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    margin: 2px 0;
    display: flex;
    font-size: 12px;
`
export default (props) => {
    return (<Items>
        <SearchImage type={props.item.type} />
        <Item {...props} />
        <p>{props.item.date}</p>
    </Items>);
}