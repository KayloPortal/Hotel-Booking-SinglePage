import iconLogo from "/icon-logo.svg";
import iconSearch from "/icon-search.svg";
import iconPhone from "/icon-phone.svg";
import iconChevDown from "/icon-chevron-down.svg";
import iconCross from "/icon-cross.svg";
import imgAvatar from "/image-avatar.png";

function Header() {
  return (
    <header className="header">
      <div>
        <img src={iconLogo} alt="Brand Logo" />
        <SearchForm />
      </div>
      <div>
        <div className="header-phone">
          <img src={iconPhone} alt="phone" />
          <p>+ 1 (800) 657 8976</p>
        </div>
        <div className="header-profile">
          <img src={imgAvatar} alt="your profile image" />
          <p>Jon Doe</p>
          <img src={iconChevDown} alt="open profile menu" />
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
