import React, { useState } from "react";
import ScrollNextPrevArrows from "./ScrollNextPrevArrows";
import DotsOptions from "../icons/DotsOptions";

type HeaderProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
};

export default function Header({ setSearchQuery }: HeaderProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    window.history.replaceState(
      {},
      "",
      `?q=${encodeURIComponent(e.target.value)}`
    );
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === "Enter"){
      const input = e.target as HTMLInputElement;
      setSearchQuery(input.value);
    } 
  };
  return (
    <div className="flex gap-2 my-3 items-center">
      <a href="/search">
        <div className="block md:hidden">
          <svg
            width="45"
            height="49.46280991735537"
            viewBox="0 0 363 399"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 267.154V131.714C0.000987483 120.481 2.95865 109.446 8.57578 99.7176C14.1929 89.9894 22.2716 81.9111 32 76.2944L149.3 8.57437C159.029 2.9572 170.066 0 181.3 0C192.534 0 203.571 2.9572 213.3 8.57437L330.59 76.2944C340.318 81.9111 348.397 89.9894 354.014 99.7176C359.631 109.446 362.589 120.481 362.59 131.714V267.154C362.587 278.386 359.629 289.419 354.012 299.146C348.395 308.872 340.317 316.949 330.59 322.564L213.28 390.284C203.551 395.902 192.514 398.859 181.28 398.859C170.046 398.859 159.009 395.902 149.28 390.284L31.99 322.564C22.2649 316.947 14.1892 308.87 8.57394 299.144C2.95871 289.418 0.00172875 278.385 0 267.154V267.154Z"
              fill="url(#paint0_linear_0)"
            ></path>
            <path
              d="M212.45 368.604L317.45 307.994C321.01 305.931 324.342 303.498 327.39 300.734L213.28 234.914C203.55 229.299 192.514 226.343 181.28 226.344V350.604C181.279 354.252 182.239 357.836 184.063 360.996C185.886 364.155 188.509 366.779 191.668 368.603C194.827 370.428 198.411 371.388 202.059 371.388C205.707 371.389 209.291 370.428 212.45 368.604V368.604Z"
              fill="url(#paint1_linear_0)"
            ></path>
            <path
              d="M327.37 300.734C333.413 295.274 338.244 288.608 341.552 281.165C344.859 273.722 346.568 265.669 346.57 257.524V137.644C346.571 133.996 345.611 130.412 343.788 127.253C341.964 124.093 339.341 121.47 336.182 119.645C333.023 117.821 329.439 116.861 325.791 116.86C322.143 116.86 318.559 117.82 315.4 119.644L200.11 186.214C194.385 189.521 189.631 194.276 186.325 200.002C183.02 205.728 181.28 212.223 181.28 218.834V226.294C192.514 226.293 203.55 229.249 213.28 234.864L327.37 300.734Z"
              fill="url(#paint2_radial_0)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_0"
                x1="264.38"
                y1="53.7644"
                x2="45.98"
                y2="436.614"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.31" stopColor="#3ADEE6"></stop>
                <stop offset="0.44" stopColor="#38D8E0"></stop>
                <stop offset="0.61" stopColor="#33C6CE"></stop>
                <stop offset="0.82" stopColor="#2BA9B0"></stop>
                <stop offset="1" stopColor="#21888F"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_0"
                x1="288.51"
                y1="362.514"
                x2="46.98"
                y2="133.834"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.15" stopColor="#9B7DD9"></stop>
                <stop offset="0.37" stopColor="#7D63B3"></stop>
                <stop offset="0.57" stopColor="#664F95"></stop>
                <stop offset="0.75" stopColor="#584283"></stop>
                <stop offset="0.88" stopColor="#533E7D"></stop>
              </linearGradient>
              <radialGradient
                id="paint2_radial_0"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(91.39 51.4944) scale(480.67)"
              >
                <stop offset="0.35" stopColor="#FF78C9"></stop>
                <stop offset="0.42" stopColor="#FD7ECB"></stop>
                <stop offset="0.51" stopColor="#F890D1"></stop>
                <stop offset="0.62" stopColor="#EFAEDB"></stop>
                <stop offset="0.66" stopColor="#EBBCE0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </a>
      <div className="hidden md:flex"><ScrollNextPrevArrows /></div>
      <input
        id="search"
        type="text"
        onKeyDown={handleEnterKey}
        onChange={handleSearch}
        placeholder="Search through over 70 million podcasts and episodes..."
        className="grow text-center p-2 bg-[#16172780] text-sm border border-[#ffffff40] focus:outline-none focus:border-[#5858b3] focus:ring-1 focus:ring-[#5858b3] rounded-xl  "
      />
      <div className=" hidden md:flex items-center gap-1 justify-center">
        <button className="bg-[#3C6388] px-2 py-1 rounded-md text-sm">
          Log in
        </button>
        <button className="bg-[#3C6388] px-2 py-1 rounded-md text-sm">
          Sign up
        </button>
      </div>
      <DotsOptions setIsOptionsOpen={setIsOptionsOpen}/>
    </div>
  );
}
