import type {Component} from 'solid-js';
import styles from './App.module.css';
import Countdown from "./countdown/Countdown";
import Fireworks from "./Fireworks/Fireworks";
import {createSignal, onMount} from "solid-js";
import {CountDownTimer, days} from "./countdown/state/dateState";
import LoadingCard from "./loadingCard/LoadingCard";
import Footer from "./footer/Footer";


const rosh = await import('./assets/rosh.jpg');
const background = await import('./assets/background.jpg');
const mauritiusIsland = await import('./assets/mauritius-island.jpg');

export const [THE_DAY_HAS_COME, setTHE_DAY_HAS_COME] = createSignal(false);



const App: Component = () => {

    onMount(async () => {
        console.log(THE_DAY_HAS_COME())
        CountDownTimer();
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
                { days() !== 0 && <Countdown></Countdown>}
                { days() === 0 && <div class={styles.loadingContainer}><LoadingCard/></div>}

                {THE_DAY_HAS_COME() &&  <Fireworks></Fireworks>}

            </main>
            <Footer />
        </div>
    );
};

export default App;
