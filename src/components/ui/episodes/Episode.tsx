import DotsOptions from "@/components/icons/DotsOptions";
import React from "react";

export default function Episode(data: any) {
  console.log('data:' , data)
  return (
    <div className="flex justify-between w-80 border-b border-b-[#2e2e38] cursor-pointer">
      <div className="flex gap-4 items-center">
        <div className="w-12 object-cover">
          <img src={data.data?.artworkUrl60} width="100%" alt="" />
        </div>
        <div>
          <span className="text-xs font-bold">{data.data?.trackName}</span>
          <h5 className="text-xs text-[#E3BD71]">{data.data?.podcast.title}</h5>
        </div>
      </div>
      <DotsOptions fill="#5f5f5f" />
    </div>
  );
}
