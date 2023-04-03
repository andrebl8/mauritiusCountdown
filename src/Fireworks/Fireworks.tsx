import {Component} from "solid-js";
import styles from './fireworks.module.css';
const Fireworks: Component = () => {
    return (
        <>
            <div class={styles.firework}></div>
            <div class={styles.firework}></div>
            <div class={styles.firework}></div>
            <div class={styles.firework}></div>
            <div class={styles.firework}></div>
        </>
    )
}

export default Fireworks;