import "./Header.css";
import iconLogo from "/icon-logo.svg";
import iconSearch from "/icon-search.svg";
import iconPhone from "/icon-phone.svg";
import iconChevDown from "/icon-chevron-down.svg";
import iconCross from "/icon-cross.svg";
import imgAvatar from "/image-avatar.png";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  // GSAP Animating
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(".header__logo", { opacity: 0 }, { opacity: 1, duration: 1 });
    },
    { scope: container }
  );
  //

  function toggleMenu() {
    setShowMenu((prev) => {
      if (prev) {
        // to close
        // gsap.to(".header-wrap");
      } else {
        gsap.to("header-info", {opacity: 1, duration: 1})
      }
      return !prev;
    });
  }

  const headerInfo = (
    <>
      <div className="header-phone">
        <img className="header-phone__icon" src={iconPhone} alt="phone" />
        <p className="header-phone__number">+ 1 (800) 657 8976</p>
      </div>
      <div className="header-profile">
        <img
          className="header-profile__avatar"
          src={imgAvatar}
          alt="your profile image"
        />
        <p className="header-profile__name | fw-extrabold">Jon Doe</p>
        <img
          className="header-profile__icon"
          src={iconChevDown}
          alt="open profile menu"
        />
      </div>
    </>
  );

  return (
    <header className="header | fl-height-200" ref={container}>
      <div className="header-container | container">
        <div className="header-wrap">
          <img className="header__logo" src={iconLogo} alt="Brand Logo" />
          <SearchForm />
        </div>
        <div className="header-wrap | display-none-tablet">{headerInfo}</div>

        <HeaderInfo showMenu={showMenu} toggleMenu={toggleMenu}>
          {headerInfo}
        </HeaderInfo>

        <button
          className="header-toggle | display-none-desktop"
          onClick={toggleMenu}
        >
          <Bars3Icon className="header-toggle__icon | text-cyan-100" />
        </button>
      </div>
    </header>
  );
}

function SearchForm() {
  return (
    <form className="search" action="">
      <select className="search-options">Rent</select>

      <div className="search-tags">
        <div className="search-tag | round-100">
          <p className="search-tag__text">Los Angeles</p>
          <img src={iconCross} className="search-tag__icon" alt="delete tag" />
        </div>
        <input className="search__input" type="text" name="" id="" />
      </div>

      <button
        className="search__submit"
        type="submit"
        aria-label="submit search"
      >
        <img src={iconSearch} alt="magnifier icon" />
      </button>
    </form>
  );
}

function HeaderInfo({ showMenu, toggleMenu, children }) {
  return (
    <div
      className={`header-info ${
        showMenu ? "header-info--open" : "header-info--close"
      } display-none-desktop`}
    >
      <div className="header-info__backdrop"></div>
      <div className="header-info-content">
        <button className="header-info__toggle" onClick={toggleMenu}>
          <XMarkIcon className="header-info__toggle-icon" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Header;
