import React from "react";

export default function Header({ name, title }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className="header">
      <div className="header__avatar">{initials}</div>
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  );
}
