import React from "react";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

export default function ScrollNextPrevArrows() {
  return (
    <div className="flex gap-2 items-center ">
      <div className="cursor-pointer">
        <NextIcon />
      </div>
      <div className="cursor-pointer">
        <PrevIcon />
      </div>
    </div>
  );
}
