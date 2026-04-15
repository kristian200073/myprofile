import React from "react";

export default function Experience({ items }) {
  return (
    <section className="section">
      <h2>Experience</h2>
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <h3>
            {item.role} — {item.company}
          </h3>
          <span className="period">{item.period}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
