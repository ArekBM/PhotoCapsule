import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Utils/Button';



export default function Slider({compareDate}) {

let date = compareDate

    console.log(date)

    const [value, setValue] = useState(1960);
    const MAX = 2020;

    function handleChange(e){
        setValue(e.target.value)
    }

    function checkWin(){
        if(date === value){
            console.log('Winner')
        } else {
            console.log('Wrong')
        }
    }

    return(
        <SlideContainer >
            <Box>{value}</Box>
            <RangeSlider 
                type='range' 
                min='1918' 
                max={MAX} 
                className='slider' 
                onChange={handleChange} 
                value={value} 
            />
            <Button onClick={checkWin} text='Submit' style='padding-top: 10px'></Button>
        </SlideContainer>
    )
}

const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 5px;
`
const RangeSlider = styled.input`
    width: 100%;
    padding-bottom: 40px;
`

const Box = styled.h1`
    background-color: black;
    color: white;
    padding: 10px;
`
