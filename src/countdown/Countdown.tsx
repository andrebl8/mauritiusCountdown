import type {Component} from 'solid-js';
import styles from './dropdown.module.css';
import FlipperCard from "./flipperCard/FlipperCard";
import {days, hours, minutes, seconds} from "./state/dateState";

const Countdown: Component = () =>
    <div class={styles.test}>
        <FlipperCard value={days()} label={'dager'} background={"#EB2436"}></FlipperCard>
        <FlipperCard value={hours()} label={'timer'} background={"#131A6D"}></FlipperCard>
        <FlipperCard value={minutes()} label={'minuter'} background={"#FFD600"}></FlipperCard>
        <FlipperCard value={seconds()} label={'sekunder'} background={"#00A650"}></FlipperCard>
    </div>;

export default Countdown;
