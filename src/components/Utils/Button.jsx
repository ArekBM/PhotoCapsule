import React from 'react';
import styled from 'styled-components';

export default function Button({
    text,
    onClick
}) {
    return (
        <ButtonWrapper
            onClick={onClick}
        >
            {text}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    cursor: pointer;
    height: 50px;
    width: 200px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 1px;
    outline: auto black;
`