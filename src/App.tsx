import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Countdown from "./countdown/Countdown";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
          <h1>Hvor lenge er det til Mauritius?</h1>
      </header>
      <main style={styles.mainContent}>
        <Countdown></Countdown>
      </main>
    </div>
  );
};

export default App;
