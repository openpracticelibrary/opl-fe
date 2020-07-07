import React from "react";

function BetaIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "12"}
      height={props.height || "15"}
      viewBox="0 0 12 15"
    >
      <path fill={props.fill || "#1975FF"} stroke="#1975FF" stroke-width=".3" d="M10.811 11.06L8.02 4.96V1.812h.35c.223 0 .404-.181.404-.406 0-.224-.18-.406-.403-.406H3.646c-.222 0-.403.182-.403.406 0 .225.18.406.403.406h.344V4.96l-2.798 6.094c-.297.642-.247 1.394.132 1.991.379.598 1.034.958 1.738.956h5.886c.7 0 1.351-.361 1.728-.956.378-.595.428-1.342.135-1.983h0zm-.805 1.547c-.23.365-.63.584-1.058.58H3.062c-.425 0-.821-.219-1.05-.58-.229-.362-.259-.816-.08-1.205l2.834-6.183c.024-.054.037-.112.036-.17V1.811h2.412v3.236c0 .06.012.117.036.17l2.828 6.184c.18.389.15.844-.08 1.205h.008z"/>
    </svg>
  );
}

export default BetaIcon;
