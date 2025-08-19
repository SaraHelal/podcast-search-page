"use client";
import React, { useState, useEffect } from "react";
import Header from "../ui/Header";
import MainContent from "../ui/MainContent";
import Sidebar from "../ui/Sidebar";
import { useSearchParams } from "next/navigation";
import useFetchSearch from "@/hooks/useFetchSearch";

export default function Layout() {
  const params = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const { results, loading } = useFetchSearch(searchQuery);

  useEffect(() => {
    setSearchQuery(params.get("q") || "");
  }, [params]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-7 px-5 overflow-hidden">
        <Header setSearchQuery={setSearchQuery} />
        <MainContent
          searchQuery={searchQuery}
          results={results}
          loading={loading}
        />
      </div>
    </div>
  );
}