import { connect } from 'react-redux'
import { MdFavoriteBorder } from "react-icons/md";
import { GrBasket } from "react-icons/gr";

import { Link, NavLink } from "react-router-dom";
import nav from "./nav.json";
import styles from './Header.module.scss';

function Header(props) {
  const { count } = props;
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
                  <GrBasket /><i className={styles.counter}>{count > 0 && count}</i>
              </li>
          </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = state => {
  return state.counter
}  


export default connect(mapStateToProps, null)(Header);


