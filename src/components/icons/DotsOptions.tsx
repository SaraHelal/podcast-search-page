import React from "react";

interface DotsOptionsProps {
  fill?: string;
  setIsOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function DotsOptions({ fill, setIsOptionsOpen }: DotsOptionsProps) {
  const handleClick = () => {
    setIsOptionsOpen(prev => !prev);
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <svg
        stroke="currentColor"
        fill={fill || "currentColor"}
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="jsx-8dd1f9521a2787d1 jsx-4088515754"
        height="22"
        width="22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    </div>
  );
}