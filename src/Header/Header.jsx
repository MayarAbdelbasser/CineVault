import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

function Header() {
  const [navMenuShown, setNavMenuShown] = useState(false);
  function showNavMenu() {
    setNavMenuShown(!navMenuShown);
  }
  //show nav menu
  const menuClassName = `nav__menu transition ${navMenuShown ? "active" : ""}`;
  const toggleClassName = `nav__toggle ${navMenuShown ? "active" : ""}`;
  //handle outside click
  const componentRef = useRef(null);
  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setNavMenuShown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header ref={componentRef}>
      <div className="header__container">
        <Link to="/">
          <div className="flex header__logo">
            <FontAwesomeIcon icon={faFilm} />
            <p>CineVault</p>
          </div>
        </Link>

        <button className={toggleClassName} onClick={showNavMenu}>
          <span className="transition bar"></span>
          <span className="transition bar"></span>
          <span className="transition bar"></span>
        </button>
        <nav>
          <ul className={menuClassName}>
            <li>
              <Link
                to="/"
                className="transition"
                onClick={() => setNavMenuShown(false)}
              >
                home
              </Link>
            </li>

            <li>
              <Link
                to="/movies"
                className="transition"
                onClick={() => setNavMenuShown(false)}
              >
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
