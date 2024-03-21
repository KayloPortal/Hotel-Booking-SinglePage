/* eslint-disable react/prop-types */
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
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  // GSAP Animating
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  useGSAP(
    () => {
      let comeupTL = gsap.timeline();

      comeupTL.fromTo(
        ".header__logo, .header-toggle",
        { opacity: 0, y: -100, skewX: 30 },
        { opacity: 1, skewX: 0, duration: 3, y: 0, ease: Expo.easeOut }
      );

      comeupTL.fromTo(
        ".header-toggle",
        { opacity: 0, y: -100, skewX: -30 },
        { opacity: 1, skewX: 0, duration: 3, y: 0, ease: Expo.easeOut },
        "<"
      );

      comeupTL.fromTo(
        ".header-wrap .header-phone, .header-wrap .header-profile, .header .search",
        {
          y: -100,
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          stagger: 0.25,
          delay: 1,
          ease: Expo.easeOut,
        },
        "<"
      );

      gsap.set(".header-info", { x: "8rem" });
    },
    { scope: container }
  );

  //

  const toggleMenu = contextSafe(() => {
    setShowMenu((prevShow) => {
      if (prevShow) {
        console.log("closing");
        // to close
        gsap.to(".header-info", {
          zIndex: -1,
          opacity: 0,
          x: "8rem",
          duration: 0.25,
        });
      } else {
        console.log("openning");
        gsap.to(".header-info", {
          opacity: 1,
          zIndex: 20,
          x: 0,
          duration: 0.25,
        });
      }
      return !prevShow;
    });
  });

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

// tag: {name: ""}

const colors = [
  "rgba(246, 192, 2, 0.26)",
  "rgba(2, 129, 246, 0.26)",
  "rgba(71, 145, 255, 0.26)",
  "rgba(122, 255, 119, 0.26)",
];

function SearchForm() {
  const [tags, setTags] = useState([
    { name: "Los Angeles", id: nanoid(), bgColor: colors[0] },
  ]);
  const [inputTag, setInputTag] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const tagSubmitHandler = () => {
    setTags((prevTags) => [
      ...prevTags,
      { name: inputTag, id: nanoid(), bgColor: generateColor() },
    ]);
    setInputTag("");
  };

  const submitSearch = () => {
    for (const key of tags) {
      searchParams.append("location", key.name);
    }
    setSearchParams(searchParams);
  };

  const inputChangeHandler = (e) => {
    setInputTag(e.target.value);
  };

  const removeTag = (id) => {
    setTags(prevTags => prevTags.filter(tag => tag.id !== id))
  }

  function generateColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <form className="search" action="" onSubmit={submitSearch}>
      <select className="search-options">Rent</select>

      <div className="search-tags">
        {tags.map((tag) => (
          <button
            onClick={() => removeTag(tag.id)}
            style={{ backgroundColor: tag.bgColor }}
            className="search-tag | round-100"
            key={tag.id}
          >
            <p className="search-tag__text">{tag.name}</p>

            <img
              src={iconCross}
              className="search-tag__icon"
              alt="delete tag"
            />
          </button>
        ))}
        <input
          className="search__input"
          type="text"
          name=""
          id=""
          value={inputTag}
          onChange={inputChangeHandler}
          onKeyDown={(e) => {
            if (e.code == "Enter") {
              e.preventDefault();
              tagSubmitHandler();
            }
          }}
        />
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
