//import classNames from "classnames";
import { MdFavoriteBorder } from "react-icons/md";
import { GrBasket } from "react-icons/gr";

import { Link, NavLink } from "react-router-dom";
import nav from "./nav.json";
import styles from './Header.module.scss';

function Header() {
  const headerList = nav.map(item => {
    const { id, href, link } = item;
    const navLink = isActive => ({ color: isActive ? 'red' : '' });
    return (
        <li className={styles.list} key={id}>
        <NavLink style={navLink} to={href}>{link}</NavLink>
      </li>
    )
  });
  return (
    <header className={styles.header}>
      <nav className={styles.navHeader}>
        <ul className={styles.navHeaderList}>{headerList}</ul>
      </nav>
      <nav>
          <ul className={styles.rightNav}>
              <li className={styles.list}>
                  <MdFavoriteBorder />
              </li>
              <li>
                  <GrBasket />
              </li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;


