import type {Component} from 'solid-js';

import logo from './logo.svg';
import styles from './dropdown.module.css';
import {createEffect, createSignal} from "solid-js";
import FlipperCard from "./flipperCard/FlipperCard";

const Countdown: Component = () => {
    const [days, setDay] = createSignal(0);
    const [hours, setHours] = createSignal(0);
    const [minutes, setMinutes] = createSignal(0);
    const [seconds, setSeconds] = createSignal(0);


    const [hover, setHover] = createSignal(false);
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

            // Calculate the remaining newDays, newHours, newMinutes, and newSeconds
            const newDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const newHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const newMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const newSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setDay(newDays)
            setHours(newHours)
            setMinutes(newMinutes)
            setSeconds(newSeconds)
        }, 1000);

    }


    CountDownTimer();
    return (
        <div class={styles.test}>
            <FlipperCard value={days()} label={'dager'} background={"#EB2436"}></FlipperCard>
            <FlipperCard value={hours()} label={'timer'} background={"#131A6D"}></FlipperCard>
            <FlipperCard value={minutes()} label={'minuter'} background={"#FFD600"}></FlipperCard>
            <FlipperCard value={seconds()} label={'sekunder'} background={"#00A650"}></FlipperCard>
        </div>
    );
};

export default Countdown;
