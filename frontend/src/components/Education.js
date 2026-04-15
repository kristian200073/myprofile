import React from "react";

export default function Education({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="section">
      <h2>Education</h2>
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <h3>{item.degree}</h3>
          <span className="period">
            {item.school} · {item.year}
          </span>
        </div>
      ))}
    </section>
  );
}
