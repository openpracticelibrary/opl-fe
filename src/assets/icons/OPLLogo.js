import React from "react";


const OPLLogo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 185 18" style={{ margin: -5 }}>
    <defs>
      <filter id="prefix__a" width="102.2%" height="113.8%" x="-.5%" y="-3.4%" filterUnits="objectBoundingBox">
        <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.912335824 0 0 0 0 0.912335824 0 0 0 0 0.912335824 0 0 0 1 0"/>
      </filter>
      <text id="prefix__b" fill="#2E2E2E" fontFamily="Chewy-Regular, Chewy" fontSize="19" fontWeight="normal">
        <tspan x="28" y="43">OPEN PRACTICE LIBRARY</tspan>
      </text>
    </defs>
    <g fill="#2E2E2E" fillRule="evenodd" transform="translate(-28 -30)">
      <use filter="url(#prefix__a)" xlinkHref="#prefix__b"/>
      <use xlinkHref="#prefix__b"/>
    </g>
  </svg>
);

export default OPLLogo;
