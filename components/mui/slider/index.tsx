import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function SliderMUI({ mainParam }: any) {
  return (
    <Box className="!w-full">
      <Slider
        aria-label="Always visible"
        max={500}
        getAriaValueText={valuetext}
        step={10}
        value={mainParam}
        valueLabelDisplay="on"
        valueLabelFormat={(value: any) => {
          if (value < 50) {
            return <div>Good</div>
          } else if (value < 100) {
            return <div>Fair</div>
          } else if (value < 200) {
            return <div>Moderate</div>
          } else if (value < 400) {
            return <div>Unhealty</div>
          } else {
            return <div>Hazardous</div>
          }
        }}
        disabled
      />
    </Box>
  );
}
