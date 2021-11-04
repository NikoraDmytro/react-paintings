import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.paintingsCatalog}>
        <h1 className={styles.title}>Картины эпохи Возрождения</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
