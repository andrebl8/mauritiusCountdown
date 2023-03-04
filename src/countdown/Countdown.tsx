import type {Component} from 'solid-js';

import logo from './logo.svg';
import styles from './dropdown.module.css';
import {createSignal} from "solid-js";

const Countdown: Component = () => {
    const [days, setDay] = createSignal(0);
    const [hours, setHours] = createSignal(0);
    const [minutes, setMinutes] = createSignal(0);
    const [seconds, setSeconds] = createSignal(0);
    const CountDownTimer = () => {
        // Set the target date to July 1, 2023
        const targetDate = new Date('July 1, 2023 00:00:00');

        // Update the countdown every second
        const countdown = setInterval(() => {
            // Get the current date and time
            const currentDate = new Date();

            // Calculate the remaining time in milliseconds
            const remainingTime = targetDate.getTime() - currentDate.getTime();

            // If the countdown is over, clear the interval and log a message
            if (remainingTime <= 0) {
                clearInterval(countdown);
                console.log('Countdown is over!');
                return;
            }

            // Calculate the remaining days, hours, minutes, and seconds
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setDay(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            // Log the remaining time to the console
            //console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        }, 1000);

    }

    CountDownTimer();
    console.log(days)
    return (
        <div class={styles.test}>
            <p>{`${days()} days, ${hours()} hours, ${minutes()} minutes, ${seconds()} seconds`}</p>
        </div>
    );
};

export default Countdown;
