import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <Link to="/" className={styles.logo}>
            <span className="fa fa-tasks" />
          </Link>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
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
