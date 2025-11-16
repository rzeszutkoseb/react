// src/components/NavBar/NavBar.js

import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navInner}>
          <Link to="/" className={styles.logo}>
            <span className={'fa fa-tasks'} />
          </Link>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
