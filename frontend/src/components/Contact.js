import React from "react";

export default function Contact({ contact }) {
  return (
    <section className="section">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li>
          ✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          🐙{" "}
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          💼{" "}
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
