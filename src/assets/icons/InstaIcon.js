import React from "react";

function InstaIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.height || "22"}
      height={props.height || "22"}
      viewBox="0 0 22 22"
    >
      <g
        fill={props.fill || "#717171"}
        fillRule="evenodd"
      >
        <path d="M10.974.007c-2.98 0-3.354.013-4.525.066-1.168.053-1.965.239-2.663.51-.722.28-1.334.656-1.944 1.266-.61.61-.985 1.222-1.266 1.943C.305 4.49.12 5.288.066 6.456.013 7.626 0 8 0 10.981c0 2.98.013 3.354.066 4.524.053 1.168.239 1.966.51 2.664.28.722.656 1.334 1.266 1.944.61.61 1.222.985 1.944 1.265.698.272 1.495.457 2.663.51 1.17.054 1.545.067 4.525.067 2.98 0 3.354-.013 4.524-.066 1.168-.054 1.966-.24 2.664-.51.722-.281 1.334-.656 1.944-1.266.61-.61.985-1.222 1.266-1.944.27-.698.456-1.496.51-2.664.053-1.17.066-1.544.066-4.524s-.013-3.354-.066-4.525c-.054-1.168-.24-1.966-.51-2.664-.28-.721-.656-1.333-1.266-1.943-.61-.61-1.222-.986-1.944-1.266-.698-.271-1.496-.457-2.664-.51-1.17-.053-1.544-.066-4.524-.066zm0 1.977c2.93 0 3.277.011 4.434.064 1.07.049 1.651.228 2.038.378.512.2.878.437 1.262.82.384.385.621.75.82 1.263.15.386.33.967.378 2.037.053 1.158.064 1.505.064 4.435 0 2.93-.01 3.277-.064 4.434-.048 1.07-.227 1.651-.377 2.038-.2.512-.437.878-.821 1.262-.384.384-.75.621-1.262.82-.387.15-.968.33-2.038.378-1.157.053-1.504.064-4.434.064s-3.278-.01-4.435-.064c-1.07-.048-1.65-.227-2.037-.378-.512-.199-.878-.436-1.262-.82-.384-.384-.622-.75-.82-1.262-.151-.387-.33-.968-.379-2.038-.053-1.157-.064-1.504-.064-4.434s.011-3.277.064-4.435c.049-1.07.228-1.65.378-2.037.2-.513.437-.878.821-1.262.384-.384.75-.622 1.262-.821.386-.15.968-.329 2.037-.378 1.158-.053 1.505-.064 4.435-.064z"/>
        <path d="M10.974 14.639c-2.02 0-3.658-1.638-3.658-3.658s1.638-3.658 3.658-3.658 3.658 1.638 3.658 3.658-1.638 3.658-3.658 3.658zm0-9.293c-3.112 0-5.635 2.522-5.635 5.635 0 3.112 2.523 5.635 5.635 5.635 3.112 0 5.635-2.523 5.635-5.635 0-3.113-2.523-5.635-5.635-5.635zM18.149 5.123c0 .727-.59 1.317-1.317 1.317-.728 0-1.317-.59-1.317-1.317s.59-1.317 1.317-1.317 1.317.59 1.317 1.317"/>
      </g>
    </svg>
  );
}

export default InstaIcon;
