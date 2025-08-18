import React from "react";
import ScrollNextPrevArrows from "./ScrollNextPrevArrows";
import DotsOptions from "../icons/DotsOptions";

export default function Header({searchQuery, setSearchQuery, fetchSearch} : any) {
const handleSearch = (e: any)=>{
  setSearchQuery(e.target.value)
  window.history.replaceState({}, '', `?q=${encodeURIComponent(e.target.value)}`);
}
 const handleEnterKey = (e : any) => {
  if(e.key === 'Enter') setSearchQuery(e.target.value)
 }
  return (
    <div className="flex gap-2 my-3 items-center">
     <ScrollNextPrevArrows />
      <input type="text" onKeyDown={handleEnterKey} onChange={handleSearch} placeholder="Search through over 70 million podcasts and episodes..." className="grow text-center p-2 bg-[#16172780] text-sm border border-[#ffffff40] rounded-xl  " />
      <div className="flex items-center gap-1 justify-center">
        <button className="bg-[#3C6388] px-2 py-1 rounded-md text-sm">Log in</button>
        <button className="bg-[#3C6388] px-2 py-1 rounded-md text-sm">Sign up</button>
      </div>
      <DotsOptions />
    </div>
  );
}
