import "./Header.css";
import iconLogo from "/icon-logo.svg";
import iconSearch from "/icon-search.svg";
import iconPhone from "/icon-phone.svg";
import iconChevDown from "/icon-chevron-down.svg";
import iconCross from "/icon-cross.svg";
import imgAvatar from "/image-avatar.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container | container">
        <div className="header-wrap">
          <img className="header__logo" src={iconLogo} alt="Brand Logo" />
          <SearchForm />
        </div>
        <div className="header-wrap">
          <div className="header-phone">
            <img className="header-phone__icon" src={iconPhone} alt="phone" />
            <p className="header-phone__number">+ 1 (800) 657 8976</p>
          </div>
          <div className="header-profile">
            <img className="header-profile__icon" src={imgAvatar} alt="your profile image" />
            <p className="header-profile__number">Jon Doe</p>
            <img src={iconChevDown} alt="open profile menu" />
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchForm() {
  return (
    <form className="search" action="">
      <select className="search-options">Rent</select>

      <div className="search-tags">
        <span className="search-tag">
          <p className="search-tag__text">Los Angeles</p>
          <img src={iconCross} className="search-tag__icon" alt="delete tag" />
        </span>
        <input type="text" name="" id="" />
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

export default Header;
