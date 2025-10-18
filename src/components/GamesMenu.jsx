import React from "react";

export default function GamesMenu(props) {

  const blzMenu = props.obj;
  const subMenuClass = `subMenu abso ${blzMenu.isOpen ? "isOpen" : ""}`;

  return (
    <nav
      className={subMenuClass}
      onMouseEnter={blzMenu.handleMouseEnter}
      onMouseLeave={blzMenu.handleMouseLeave}
    >
      <div className="drop-row"></div>
      <ul>
        <li>
          <a href="#visitblz">Visit Blizzard</a>
        </li>
        <li>
          <a href="#allgames">All Games</a>
        </li>
      </ul>
      <ul className="second-ul">
        <h5>You Might Also Like</h5>
        <li>
          <a href="">
            <img src="/wc-logo.svg" alt="" />
            <div className="game">
              <h4>World of Warcraft: Midnight</h4>
              <span>
                Expansion <div className="release">Upcoming</div>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="/wc-logo.svg" alt="" />
            <div className="game">
              <h4>World of Warcraft: Mists of Pandaria Classic</h4>
              <span>
                Expansion <div className="release">New</div>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="/wc-logo.svg" alt="" />
            <div className="game">
              <h4>World of Warcraft</h4>
              <span>MMORPG</span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="/wc-logo.svg" alt="" />
            <div className="game">
              <h4>Warcraft Rumble</h4>
              <span>Mobile Action Strategy</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
