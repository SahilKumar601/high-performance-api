"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<{
    results: string[];
    duration: number;
  }>();
  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setResult(undefined);
      const res = await fetch(`/api/search?query=${input}`);
    };
    fetchData();
  }, [input]);
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
    </div>
  );
}
