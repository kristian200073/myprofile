import React from "react";

export default function About({ bio }) {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p style={{ lineHeight: 1.7, color: "#cfd8dc" }}>{bio}</p>
    </section>
  );
}
