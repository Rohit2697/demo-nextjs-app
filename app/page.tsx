"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import UserTable from "./components/UserTable";
import Stopwatch from "./components/Stopwatch";
import Loader from "./components/Loader";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", name: "", age: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [demoProgress, setDemoProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoProgress((current) => (current >= 100 ? 0 : current + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  if (isLoading) {
    return <Loader label="Loading SDLC Agent Demo..." />;
  }

  return (
    <main>
      <h1 style={{ backgroundColor: "yellow" }}>Welcome to SDLC</h1>
      <h1>SDLC Agent Demo</h1>
      <p>This is a deliberately tiny app used to demo the agent pipeline.</p>
      <div style={{ marginBottom: "1.5rem" }}>
        <ProgressBar progress={demoProgress} label="Demo progress" />
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <ProgressBar progress={demoProgress} label="Demo progress (orange)" color="orange" />
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <ProgressBar progress={demoProgress} label="Demo progress (pink)" color="pink" />
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <UserTable />
      <Stopwatch />
      <p>
        <Link href="/settings">Go to Settings →</Link>
      </p>
    </main>
  );
}
