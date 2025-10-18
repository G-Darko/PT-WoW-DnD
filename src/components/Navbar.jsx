import React from "react";
import RowSVG from "./RowSVG";
import CloseSVG from "./CloseSVG";
import { useHover } from "../Hooks/useHover";
import { useIsMobile } from "../Hooks/useIsMobile";
import BlzSVG from "./BlzSVG";
import { useState } from "react";
import MainLinks from "./MainLinks";
import GamesMenu from "./GamesMenu";

export default function Navbar({
  onLoginClick,
  isLoggedIn,
  onCustomizeClick,
  onLogout,
  logoUrl,
  navLinks
}) {
  const blzMenu = useHover();
  const accMenu = useHover();

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAcc, setIsOpenAcc] = useState(false);

  const accMenuClass = isMobile
    ? "subMenu hide menu right"
    : `subMenu abso acc ${accMenu.isOpen ? "isOpen" : ""}`;

  const openMenu = () => {
    setIsOpenAcc(false);
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const openAccMenu = () => {
    setIsOpen(false);
    setIsOpenAcc(!isOpenAcc);
  };
  const closeAccMenu = () => {
    setIsOpenAcc(false);
  };
  const openClass = isOpen ? "opened" : "";
  const openClassAcc = isOpenAcc ? " opened" : "";

  const handleLogClick = () => {
    if (isLoggedIn) {
      onCustomizeClick(); 
    } else {
      onLoginClick(); 
    }
  };

  return (
    <header>
      <button className="btn" onClick={openMenu}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
      <nav>
        <BlzSVG obj={blzMenu} is={isMobile} logoUrl={logoUrl} />
        <ul className="no-100">
          <li>
            <a href="" className="wc-logo">
              <img src="/wc-logo.svg" alt="" />
            </a>
          </li>
        </ul>
        <MainLinks links={navLinks}/>
      </nav>
      <section className="buttons">
        <button
          className="account"
          onClick={openAccMenu}
          onMouseEnter={accMenu.handleMouseEnter}
          onMouseLeave={accMenu.handleMouseLeave}
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
              d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
            ></path>
          </svg>
          <div className="hide">
            Account <RowSVG />
          </div>
        </button>
        <button className="buy hide">Buy Now</button>
      </section>
      {/* SubMenu Juegos */}
      <GamesMenu obj={blzMenu} />
      {/* SubMenu Cuenta */}
      <nav
        className={accMenuClass + openClassAcc}
        onMouseEnter={accMenu.handleMouseEnter}
        onMouseLeave={accMenu.handleMouseLeave}
      >
        <div className="closeBG" onClick={closeAccMenu}></div>
        <div className="header">
          <button className="btn" onClick={closeAccMenu}>
            <CloseSVG />
          </button>
          <BlzSVG obj={blzMenu} is={isMobile} logoUrl={logoUrl} />
          <div></div>
        </div>
        <div className="drop-row"></div>
        <ul>
          <li className="li-btn">
            <button className="log" onClick={handleLogClick}>
              {isLoggedIn ? "Personalizar" : "Log In"}
            </button>
            {isLoggedIn && (
              <button className="log" onClick={onLogout}>
                Log Out
              </button>
            )}
          </li>
          <li>
            <a href="#visitblz">Accoun Setting</a>
          </li>
          <li>
            <a href="#allgames">Sing Up</a>
          </li>
        </ul>
        <ul className="second-ul">
          <li>
            <a href="">
              <h4>Support</h4>
            </a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Download Battle.net</a>
          </li>
        </ul>
      </nav>
      {/* Responsive Menu Izq */}
      <section className={"hide menu " + openClass}>
        <div className="closeBG" onClick={closeMenu}></div>
        <div className="header">
          <button className="btn" onClick={closeMenu}>
            <CloseSVG />
          </button>
          <BlzSVG obj={blzMenu} is={isMobile} logoUrl={logoUrl} />
          <div></div>
        </div>
        <img src="/overview.png" alt="overview" />
        <nav>
          <MainLinks links={navLinks}/>
        </nav>
        <button className="buy ">Buy Now</button>
        <GamesMenu obj={blzMenu} />
      </section>
    </header>
  );
}
