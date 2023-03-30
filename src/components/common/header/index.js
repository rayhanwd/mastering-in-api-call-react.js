import Logo from "./logo/Logo";
import Nav from "./nav";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
