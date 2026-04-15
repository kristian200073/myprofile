import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL || "";

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/profile`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load profile");
        return res.json();
      })
      .then(setProfile)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="error">Error: {error}</p>;
  if (!profile) return <p className="loading">Loading…</p>;

  return (
    <div className="app">
      <Header name={profile.name} title={profile.title} />
      <main className="container">
        <About bio={profile.bio} />
        <Skills skills={profile.skills} />
        <Experience items={profile.experience} />
        <Contact contact={profile.contact} />
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}

export default App;
