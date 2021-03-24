import React, {ChangeEvent} from 'react';
import s from "./set.module.css"
import {actionsCreators, useDispatch} from "../reducers/AppReducer";

type propsTypeSet = {
    setValueComponent: (value: number) => void
    setStartValueComponent: (value: number) => void
    setMaxValueComponent: (value: number) => void
    maxValue: number
    startValue: number
    setActiveStart: (value: boolean) => void
    setActiveMax: (value: boolean) => void
    setText: (text: string) => void
}

export const Set = (props: propsTypeSet) => {
    let dispatch = useDispatch()

    {
        (props.startValue === 0 && props.maxValue > 0) || (props.maxValue > 0 && props.maxValue > props.startValue && props.startValue >= 0) ? props.setText("enter value and press 'set'") : props.setText("Incorrect value!")
    }

    const setValues = () => {
        localStorage.setItem('max', props.maxValue.toString());
        localStorage.setItem('min', props.startValue.toString());
        props.setValueComponent(props.startValue)
        props.setActiveStart(false)
        props.setActiveMax(false)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let NewMaxValue = Number(e.currentTarget.value)
        dispatch(actionsCreators.setMaxValueComponentAC(NewMaxValue))
        dispatch(actionsCreators.setActiveMaxValueAC(true))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let NewStartValue = Number(e.currentTarget.value)
        dispatch(actionsCreators.setValuesAC(NewStartValue))
        dispatch(actionsCreators.setActiveStartValueAC(true))
        dispatch(actionsCreators.setStartValueComponentAC(NewStartValue))
    }

    return <div>
        <div className={s.setPage}>
            <div className={s.inputs}>
                <div>
                    <span>Start value:</span>
                    <input type="number" onFocus={() => props.setActiveStart(true)} value={props.startValue}
                           onChange={(e) => onChangeStartValue(e)}/>
                </div>
                <div>
                    <span>Maximum value:</span>
                    <input type="number" onFocus={() => props.setActiveMax(true)} value={props.maxValue}
                           onChange={(e) => onChangeMaxValue(e)}/>
                </div>
            </div>
            <div className={s.button}>
                <button className={s.set} onClick={() => setValues()}>Set</button>
            </div>
        </div>

    </div>
}