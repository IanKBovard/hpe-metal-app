import React from 'react';
import PropTypes from 'prop-types';

const PinkAccent = props => {
  return (
    <svg
      viewBox="0 0 1422 402"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
      className={`${props.className} SVG`}
    >
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="metal-loading" transform="translate(-498 -678)" fill="#FD6FFF">
          <path
            d="M3436.73668,1105 L787.48359,1105 L1145.83625,857.258106 L1164.7254,936.969428 L1482.13646,697.007285 L1331.73358,1043.10116 L2124.29769,557.548221 L2099.94442,619.531326 L2408.76796,428.481935 L2248.9903,936.969428 L2905.60607,451.165411 L2869.2096,608.815038 L3221.04211,402.657834 L3124.92563,628.699398 L3338.31962,552.222864 L3295.60127,663.488739 L4168,318 L3927.58996,576.734025 L3284.34878,1003.79156 L3646.3745,879.383644 L3436.73668,1105 Z M2518.08176,414.367185 L2734.63283,187.897802 L2950.02929,137 L2518.08176,414.367185 Z M744.910061,913.311038 L498,985.72775 L975.62967,678.937334 L744.910061,913.311038 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  );
};

PinkAccent.propTypes = {
  className: PropTypes.string,
};

export default PinkAccent;
