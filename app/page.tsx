"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", name: "", age: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main>
      <h1 style={{ backgroundColor: "yellow" }}>Welcome to SDLC</h1>
      <h1>SDLC Agent Demo</h1>
      <p>This is a deliberately tiny app used to demo the agent pipeline.</p>
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
      <p>
        <Link href="/settings">Go to Settings →</Link>
      </p>
    </main>
  );
}
