"use client";
import Layout from "@/components/layouts/Layout";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <Layout />
    </Suspense>
  );
}
