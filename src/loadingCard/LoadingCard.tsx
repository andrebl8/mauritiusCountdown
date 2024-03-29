import styles from './loadingCard.module.css';


function LoadingCard() {
    return (
        <svg class={styles.pl} width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <circle class={styles.pl__ring1} cx="64" cy="64" r="60" fill="none" stroke="hsl(355, 83%, 53%)" stroke-width="8"
                    transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377"
                    stroke-dashoffset="-376.4"/>
            <circle class={styles.pl__ring2}  cx="64" cy="64" r="52.5" fill="none" stroke="hsl(235, 70%, 25%)" stroke-width="7"
                    transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9"
                    stroke-dashoffset="-329.3"/>
            <circle class={styles.pl__ring3} cx="64" cy="64" r="46" fill="none" stroke="hsl(50, 100%, 50%)" stroke-width="6"
                    transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289"
                    stroke-dashoffset="-288.6"/>
            <circle class={styles.pl__ring4} cx="64" cy="64" r="40.5" fill="none" stroke="hsl(149, 100%, 33%)" stroke-width="5"
                    transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5"
                    stroke-dashoffset="-254"/>
            {/*<circle class={styles.pl__ring5} cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)"
                     stroke-width="4"
                     transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2"
                     stroke-dashoffset="-225.8"/>
                <circle class={styles.pl__ring6} cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3"
                transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2"
                stroke-dashoffset="-203.9"/>*/}
        </svg>

    )
}

export default LoadingCard;
