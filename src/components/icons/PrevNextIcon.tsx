import React from "react";

export default function PrevNextIcon({ref}: any) {
    const handleArrows = (type: string) => {
        if(type === 'next'){
            ref.current.scrollBy({ left: -1000, behavior: "smooth" });
        }
        if(type === 'prev'){
            ref.current.scrollBy({ left: 1000, behavior: "smooth" });
        }

    }

  return (
    <div className="flex gap-2 items-center">
        <div className="text-[#AEAEB3] hover:text-white cursor-pointer hover:bg-[#2a2b47] p-[5px] rounded-full" onClick={()=>handleArrows('next')}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
        </svg>
      </div>
      <div className="text-[#AEAEB3] hover:text-white cursor-pointer hover:bg-[#2a2b47] p-[5px] rounded-full" onClick={()=>handleArrows('prev')}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
        </svg>
      </div>

      
    </div>
  );
}
