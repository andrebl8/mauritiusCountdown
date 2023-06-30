import {createSignal} from "solid-js";

export const [days, setDay] = createSignal(0);
export const [hours, setHours] = createSignal(0);
export const [minutes, setMinutes] = createSignal(0);
export const [seconds, setSeconds] = createSignal(0);
export const [THE_DAY_HAS_COME, setTHE_DAY_HAS_COME] = createSignal(false);
export const [loading, setLoading] = createSignal(true);


export const CountDownTimer = () => {
    // Set the target date to July 1, 2023
    const targetDate = new Date('July 1, 2023 00:00:00');
    console.log(targetDate.toLocaleString('en-US', { timeZone: 'Europe/Oslo'}))
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
        setTHE_DAY_HAS_COME( days() === 0 && hours() === 0 && minutes() === 0 && seconds() === 0)
        setLoading(false)
    }, 1000);

}
