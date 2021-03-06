import React from 'react';
import PropTypes from 'prop-types';

const YellowAccent = props => {
  return (
    <svg
      viewBox="0 0 1449 514"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
      className={`${props.className} SVG`}
    >
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="metal-loading" transform="translate(-471 -566)" fill="#FFAA15">
          <path
            d="M2938.80464,507.491669 L2901.33147,636.750503 L3280.49261,428.579794 L3163.60096,778.916312 L4105,451.307292 L3924.83958,656.971023 L3525.51419,946.68868 L3323.4751,1054.29356 L3611.92457,956.79589 L3504.91425,1105 L1019.24722,1105 L2052.46224,487.167454 L2000.88195,732.277296 L2468.19969,467.373913 L2331.04836,946.68868 L2938.80464,507.491669 Z M2582.91591,277.327063 L2799.48961,50.8904392 L3014.90857,0 L2582.91591,277.327063 Z M717.935862,882.288092 L471,954.694329 L948.679581,647.94829 L717.935862,882.288092 Z M1019.24722,1104.53192 L694.054487,1105 L975.590247,918 L926.880158,1078.00197 L1056.4924,1003.58983 L1019.24722,1104.53192 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  );
};

YellowAccent.propTypes = {
  className: PropTypes.string,
};

export default YellowAccent;
