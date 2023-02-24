import React, { useState } from 'react';
import photos from '../photos.json';
import Slider from './Slider';
import Button from './Utils/Button';
import styled from 'styled-components';


function Photo(){
    const randomNumber = Math.floor(Math.random() * photos.length)
    const firstImage = photos[randomNumber]

    const [image, setImages] = useState(firstImage.img)
    const [year, setYear] = useState(firstImage.year)

    function getImage(){
        const randomNumber = Math.floor(Math.random() * photos.length)
        const imageArray = photos;
        let newImage = imageArray[randomNumber]
        let imgYear = newImage.year
        setImages(newImage.img)
        setYear(imgYear)

    }

    console.log(image)
    console.log(year)

    return (
        <PhotoLabWrapper>
            <Button onClick={getImage} text='Get Image'></Button>
            <img src={image} />
            <Slider compareDate={year} />
        </PhotoLabWrapper>

    )
}

const PhotoLabWrapper = styled.div`
    display: flex;
    flex-direction: column;
`



export default Photo;