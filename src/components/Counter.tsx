import s from "./counter.module.css"
import React from "react";
import {Button} from "./Button";

type propsTypeCounter = {
    maxValue: number
    value: number
    addValue: () => void
    startValue: number
    resetValue: () => void
    activeStart: boolean
    activeMax: boolean
    text: string
    disabledIncButton: (value: number) => boolean
    disabledResButton: (value: number) => boolean
}


export const Counter = (props: propsTypeCounter) => {

    return <div className={s.counter}>
        <div className={s.textField}>
            {props.startValue < 0 || props.maxValue < 0 || props.activeMax || props.activeStart ?
                <div className={props.value === props.maxValue ? s.red : s.black}>{props.text}</div> :
                <div className={props.value === props.maxValue ? s.red : s.black}>{props.value}</div>
            }
        </div>
        <div className={s.knopki}>
            <Button buttonFunction={props.addValue} disabledButton={props.disabledIncButton} title={"Inc"}/>
            <Button buttonFunction={props.resetValue} disabledButton={props.disabledResButton} title={"Reset"}/>
        </div>
    </div>
}