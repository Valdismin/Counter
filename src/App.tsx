import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Set} from "./components/Set"
import {Counter} from "./components/Counter";
import {actionsCreators, useDispatch} from "./reducers/AppReducer";
import {useSelector} from "react-redux";
import {selectCounter} from "./reducers/selector";

type getValueType = string | null
export let getMinValue: getValueType = localStorage.getItem('min')
export let getMaxValue: getValueType = localStorage.getItem('max')


function App() {

    let dispatch = useDispatch()
    useEffect(() => {
        if (getMinValue && getMaxValue) {
            dispatch(actionsCreators.setStartValueComponentAC(+getMinValue))
            dispatch(actionsCreators.setMaxValueComponentAC(+getMaxValue))
        }
    }, [])
    const {value, activeStart, activeMax, startValue, maxValue} = useSelector(selectCounter)
    let [text, setText] = useState<string>(`enter value and press 'set'`)

    const setValues = () => {
        dispatch(actionsCreators.setValuesAC(value))
    }
    const resetValue = () => {
        dispatch(actionsCreators.resetValueAC())
    }
    const addValue = () => {

        if (value >= startValue && value <= maxValue) {
            dispatch(actionsCreators.addValueAC(value))
        }
    }
    const setStartValueComponent = (value: number) => {
        dispatch(actionsCreators.setStartValueComponentAC(value))
    }
    const setMaxValueComponent = (value: number) => {
        dispatch(actionsCreators.setMaxValueComponentAC(value))
    }
    const setActiveMaxValue = (value: boolean) => {
        dispatch(actionsCreators.setActiveMaxValueAC(value))
    }
    const setActiveStartValue = (value: boolean) => {
        dispatch(actionsCreators.setActiveStartValueAC(value))
    }
    const disabledSetButton = (value: number) => {
        return !(maxValue && startValue >= 0 && maxValue > startValue && maxValue !== startValue && maxValue > 0 && startValue >= 0);
    }
    const disabledIncButton = (value: number) => {
        return !(value >= 0 && value < maxValue && value >= startValue && (!activeMax && !activeStart));
    }
    const disabledResButton = (value: number) => {
        return value <= 0;
    }

    return (
        <div className={s.schetchik}>
            <div className={s.set}>
                <Set setValueComponent={setValues}
                     setStartValueComponent={setStartValueComponent}
                     setMaxValueComponent={setMaxValueComponent}
                     maxValue={maxValue}
                     startValue={startValue}
                     setActiveMax={setActiveMaxValue}
                     setActiveStart={setActiveStartValue}
                     setText={setText}/>
            </div>
            <div className={s.counter}>
                <Counter value={value}
                         maxValue={maxValue}
                         addValue={addValue}
                         resetValue={resetValue}
                         startValue={startValue}
                         activeMax={activeMax}
                         activeStart={activeStart}
                         text={text}
                         disabledIncButton={disabledIncButton}
                         disabledResButton={disabledResButton}/>
            </div>

        </div>
    );
}

export default App;
