import type { Component } from 'solid-js';
import styles from './FlipperCard.module.css';
import {createEffect, createSignal, splitProps} from "solid-js";

const FlipperCard: Component<{value: number, label: string, background: string}> = (props) => {
    const [local, others] = splitProps(props, ["value", "label", "background"]);
    const [hover, setHover] = createSignal(false);

    const [value, setValue] = createSignal(0)
    createEffect(() => {
        if (local.value!== value()) {
            setHover(!hover())
            setValue(local.value)
        }
    })


    return (
        <div class={styles.flipContainer} classList={{[styles.hover]: hover()}}>
            <div class={styles.flipper} style={{transform: hover() ? "rotateY(180deg)" : ''}}>
                <div class={styles.front} style={{background: local.background}}>
                    <p>{`${value()} ${local.label}`}</p>
                </div>
                <div class={styles.back} style={{background: local.background}}>
                    <p>{`${value()} ${local.label}`}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipperCard;
