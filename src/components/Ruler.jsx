import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
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

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minValRef.current}
        className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100
          })}
        readOnly
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValRef.current}
        className="thumb thumb--zindex-4"
        readOnly
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;