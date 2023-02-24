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
    padding: 15px 32px;
    font-size: 32px;
`