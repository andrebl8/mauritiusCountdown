import type {Component} from 'solid-js';
import styles from './App.module.css';
import Countdown from "./countdown/Countdown";
import {onMount} from "solid-js";

const rosh = await import('./assets/rosh.jpg');
const background = await import('./assets/background.jpg');
const mauritiusIsland = await import('./assets/mauritius-island.jpg');
const App: Component = () => {

    onMount(async () => {
        randomImage();
    });

    const randomImage = () => {
        const images = [rosh, background, mauritiusIsland];
        const size = images.length;
        const x = Math.floor(size * Math.random());
        let selectedImage = images[x];
        document.body.style.backgroundImage = "url(" + selectedImage.default + ")";
    }


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
