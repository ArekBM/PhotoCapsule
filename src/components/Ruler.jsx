import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import styled from 'styled-components';
import "./multiRangeSlider.css";


const MultiRangeSlider = ({ min, max, onChange, guess, year }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(guess > year ? year : guess);
  const maxValRef = useRef(guess > year ? guess : year);
  const range = useRef(null);

  console.log(minValRef.current)
  console.log(maxValRef.current)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);



  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const points = guess > year ? (year - guess + 100) : Math.abs(year - guess - 100);

  console.log(points)

  return (
    <Container>
      <input
        type="range"
        min={min}
        max={max}
        value={ minValRef.current }
        className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100
          })}
        readOnly
      />
      <input
        type="range"
        min={min}
        max={max}
        value={ maxValRef.current }
        className="thumb thumb--zindex-4"
        readOnly
      />

      <Slider>
        <Slider__Track />
        {points >= 80 && <Slider__Range ref={range} />}
        {80 > points && points >= 60 && <Slider__Range_Orange ref={range} />}
        {points < 60 && <Slider__Range_Red ref={range} />}
        <Slider__Left_Value>{minVal}</Slider__Left_Value>
        <Slider__Right_Value>{maxVal}</Slider__Right_Value>
      </Slider>
    </Container>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

const Slider = styled.div`
  position: relative;
  width: 100%;
`

const Slider__Range = styled.div`
border-radius: 3px;
height: 5px;
position: absolute;
background-color: green;
z-index: 2;
`

const Slider__Range_Orange = styled(Slider__Range)`
  background-color: orange;
`

const Slider__Range_Red = styled(Slider__Range)`
  background-color: red;
`

const Container = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`

const Slider__Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`


const Slider__Left_Value = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 50px;
  margin-top: 20px;
  left: 6px;
`

const Slider__Right_Value = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 50px;
  margin-top: 20px;
  right: -4px;
`



// Green : #33FF48
// Red : #FF3333
// Orange : #FF9C33


export default MultiRangeSlider;