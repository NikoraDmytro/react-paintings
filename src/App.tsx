import React from "react";
import styles from "./App.module.scss";

const NavBar = () => {
  return (
    <ul className={styles.navBar}>
      <li>Каталог</li>
      <li>Доставка</li>
      <li>Оплата</li>
      <li>Контакты</li>
      <li>О галерее</li>
    </ul>
  );
};

function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src="img/museumLogo1.svg" alt="Logo" />
        <NavBar />
      </header>
      <main>
        <h1 className={styles.regular}>Hello World!</h1>
        <h1 className={styles.bold}>Hello World!</h1>
        <h1 className={styles.light}>Hello World!</h1>
      </main>
      <footer>
        <img src="img/museumLogo2.svg" alt="Logo" />
        <NavBar />
      </footer>
    </div>
  );
}

export default App;
