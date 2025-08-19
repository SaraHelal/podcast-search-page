import DotsOptions from "@/components/icons/DotsOptions";
import React from "react";

export default function CompactLayout({ trackName, podcastImg, title }: any) {
  return (
    <div className="flex justify-between w-full md:w-[47%] lg:w-[30%] items-center py-4 border-b border-b-[#2e2e38] cursor-pointer">
      <div className="flex gap-4 items-center">
        <div className="w-12 object-cover">
          <img src={podcastImg} width="100%" alt="" />
        </div>
        <div>
          <span className="text-xs font-bold">{trackName}</span>
          <h5 className="text-xs text-[#E3BD71]">{title}</h5>
        </div>
      </div>
      <DotsOptions fill="#5f5f5f" />
    </div>
  );
}
