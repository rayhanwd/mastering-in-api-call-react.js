import NavLink from "./NavLink";
import styles from "../../header/styles.module.css";
import navdb from "./navdb.json";
const Nav = () => {
  return (
    <nav className={styles.header__nav}>
      {navdb.map(({ id, name, path }) => (
        <NavLink key={id} name={name} path={path} />
      ))}
    </nav>
  );
};

export default Nav;
