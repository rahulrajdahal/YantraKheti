import React from "react";

function ThermometerIcon({ style }: any) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M12.75 2.25H15.75V3.75H12.75V2.25ZM12.75 5.25H15.75V6.75H12.75V5.25ZM12.75 8.25H15.75V9.75H13.3125L12.75 9.075V8.25ZM15.75 11.25V12.75H14.25C14.25 12.2325 14.175 11.7225 14.0325 11.25H15.75ZM5.25 2.25V3.75H2.25V2.25H5.25ZM5.25 5.25V6.75H2.25V5.25H5.25ZM5.25 8.25V9.075L4.6875 9.75H2.25V8.25H5.25ZM2.25 11.25H3.9675C3.825 11.7225 3.75 12.2325 3.75 12.75H2.25V11.25ZM11.25 9.75V3.75C11.25 2.505 10.245 1.5 9 1.5C7.755 1.5 6.75 2.505 6.75 3.75V9.75C5.0925 10.995 4.755 13.3425 6 15C7.245 16.6575 9.5925 16.995 11.25 15.75C12.9075 14.505 13.245 12.1575 12 10.5C11.7889 10.2139 11.5361 9.96109 11.25 9.75ZM9 3C9.4125 3 9.75 3.3375 9.75 3.75V6H8.25V3.75C8.25 3.3375 8.5875 3 9 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ThermometerIcon;