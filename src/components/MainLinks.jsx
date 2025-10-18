import React from "react";
import { useHover } from "../Hooks/useHover";

export default function MainLinks({ links }) {
  const moreMenu = useHover();
  const extraClass = `extra abso ${moreMenu.isOpen ? "isOpen" : ""}`;

  return (
    <ul className="hide">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
      <li
        className="more-icon hide"
        onMouseEnter={moreMenu.handleMouseEnter}
        onMouseLeave={moreMenu.handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          part="icon"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          ></path>
        </svg>
      </li>
      <li
        className={extraClass}
        onMouseEnter={moreMenu.handleMouseEnter}
        onMouseLeave={moreMenu.handleMouseLeave}
      >
        <div className="drop-row"></div>
        <a href="#gear">Gear</a>
      </li>
    </ul>
  );
}
