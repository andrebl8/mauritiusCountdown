import type {Component} from 'solid-js';

import logo from './logo.svg';
import styles from './dropdown.module.css';
import {createEffect, createSignal} from "solid-js";

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

           if (seconds() !== newSeconds) {
               setHover(!hover())
               setSeconds(newSeconds)
           }


            // Log the remaining time to the console
            //console.log(`${newDays} newDays, ${newHours} newHours, ${newMinutes} newMinutes, ${newSeconds} newSeconds`);
        }, 1000);

    }

    let buttonstyle={
        backgroundColor:'',
        transform: '',
    }
    createEffect(() => {

        if(hover()){
            console.log("green")
            buttonstyle.backgroundColor="green";
            buttonstyle.transform = "rotateY(180deg)";
        }
        else{
            console.log("blue")
            buttonstyle.backgroundColor='blue';
            buttonstyle.transform = "rotateY(180deg)";
        }
    });



    /*
    hver gang det kommer ny verdi, flipp kortet

     */

    const addHoverClass = (e: MouseEvent, hoverState: boolean) => {
        console.log("lelele", e.target)
        setHover(hoverState);
    }

    CountDownTimer();
    return (
        <div class={styles.test}>
            <div class={styles.cardFront}>
                <p>{`${days()} dager`}</p>
            </div>
            <p>{`${hours()} timer`}</p>
            <p>{`${minutes()} minutter`}</p>
            <div class={styles.flipContainer }
                 classList={{[styles.hover]: hover()}}


            >
                <div class={styles.flipper} style={{transform: hover() ? "rotateY(180deg)" :''}}>
                    <div class={styles.front}>
                        <p>{`${seconds()} sekunder`}</p>
                    </div>
                    <div class={styles.back}>
                        <p>{`${seconds()} sekunder`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
