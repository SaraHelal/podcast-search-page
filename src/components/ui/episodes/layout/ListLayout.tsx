import DotsOptions from "@/components/icons/DotsOptions";
import PlayIcon from "@/components/icons/PlayIcon";
import React from "react";

export default function ListLayout({
  layoutType,
  img,
  trackName,
  title,
  description,
  formatedToDate,
  episodesDuration,
}: any) {
  return (
    <div className={`w-full`}>
      <div className="relative flex justify-between gap-4 items-center w-full cursor-pointer h-full">
        <div className="object-cover overflow-hidden w-[100px] h-[100px]">
          <img
            src={img}
            className="w-full h-full object-cover"
            alt={trackName}
          />
        </div>
        <div className="flex-[2_2_0%] text-left flex flex-col justify-between h-full py-4  border-b border-b-[#2e2e38]">
          <div className="flex flex-col gap-2">
            <span
              className="text-sm font-semibold block leading-tight line-clamp-2"
              dir="rtl"
            >
              {title}
            </span>
            <h5
              className="text-xs text-[#E3BD71] block overflow-hidden text-ellipsis rtl leading-tight line-clamp-2"
              dir="rtl"
            >
              {trackName}
            </h5>
            <p className="text-[#fff9] text-[13px] leading-relaxed tracking-wide line-clamp-2 text-sm max-w-[90%] overflow-hidden ">
              {description}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-[12px]">{formatedToDate}</span>
            <span className="text-[12px]">{episodesDuration}</span>
          </div>
        </div>
        <div className="flex-[1_1_0%] absolute top-[10px] right-[2px] flex flex-col justify-center gap-6 items-center h-full">
            <PlayIcon />
            <DotsOptions fill="#5f5f5f" />
        </div>
      </div>
    </div>
  );
}
