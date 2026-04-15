import React from "react";

export default function Skills({ skills }) {
  return (
    <section className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
