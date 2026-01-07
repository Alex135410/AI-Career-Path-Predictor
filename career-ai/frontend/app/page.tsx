"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => setBackendMessage("Error: " + err));
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Frontend Connected!</h1>
      <p>Backend says: {backendMessage}</p>
    </main>
  );
}
