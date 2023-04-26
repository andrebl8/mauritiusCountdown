import styles from './style.module.css';
import {createEffect, createSignal} from "solid-js";

function Footer() {
    const [active, setActive] = createSignal(true);


    createEffect(() => {
        const interval = setInterval(() => {
            setActive(!active());
             console.log("active", active())
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <footer class={styles.footer}>
            <a class={`${styles.wedding}`} href={"https://nadineoyvind.webnode.page/"}>
                <span class={`${active() && styles.bell}`}>🔔</span>👆Bryllup 👰🤵
            </a>
        </footer>
    );
}

export default Footer;