import React from "react";

export default function UserIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "25"}
      height={props.width || "24"}
      viewBox="0 0 25 24"
    >
      <path
        fill={props.fill || "#A0A0A0"}
        fillRule="nonzero"
        d="M12.696 0C6.084 0 .704 5.383.704 12s5.38 12 11.992 12c6.612 0 11.992-5.383 11.992-12S19.308 0 12.696 0zm2.058 17.213c1.863-1.444 3.17-4.571 3.17-6.771 0-2.946-2.341-5.334-5.228-5.334-2.887 0-5.227 2.388-5.227 5.334 0 2.2 1.306 5.327 3.169 6.771-2.584.34-4.647 1.308-5.49 2.551-1.874-1.948-3.033-4.616-3.033-7.556 0-5.953 4.747-10.796 10.581-10.796s10.58 4.843 10.58 10.796c0 2.94-1.158 5.608-3.032 7.557-.843-1.244-2.905-2.211-5.49-2.552z"
      />
    </svg>
  );
}
