import React, { useEffect, useState } from "react";
import Header from "../ui/Header";
import MainContent from "../ui/MainContent";
import Sidebar from "../ui/Sidebar";
import { useSearchParams } from "next/navigation";
import useFetchSearch from "@/hooks/useFetchSearch";

export default function Layout({ children }: any) {
  const params = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(params.get("q") || "");
  const { results, loading } = useFetchSearch(searchQuery);
  console.log('results from main: ', results)
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-7 px-5 overflow-hidden">
        <Header searchQuery = {searchQuery} setSearchQuery = {setSearchQuery} />
        <MainContent searchQuery={searchQuery} results={results} loading={loading} />
      </div>
    </div>
  );
}
