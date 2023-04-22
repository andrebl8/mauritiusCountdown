import {createEffect, createSignal, splitProps} from "solid-js";
import type { Component } from 'solid-js';
import styles from './FlipperCard.module.css';

const FlipperCard: Component<{value: number, label: string, background: string}> = (props) => {
    const [local,] = splitProps(props, ["value", "label", "background"]);
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
            <div class={`box ${value() !== 0 && styles.flipper}`}  style={{transform: hover() ? "rotateY(180deg)" : ''}}>
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
