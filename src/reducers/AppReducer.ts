import {useDispatch as _useDispatch} from "react-redux";

type ActionsType =
    | ReturnType<typeof actionsCreators.resetValueAC>
    | ReturnType<typeof actionsCreators.addValueAC>
    | ReturnType<typeof actionsCreators.setStartValueComponentAC>
    | ReturnType<typeof actionsCreators.setMaxValueComponentAC>
    | ReturnType<typeof actionsCreators.setActiveMaxValueAC>
    | ReturnType<typeof actionsCreators.setActiveStartValueAC>
    | ReturnType<typeof actionsCreators.setValuesAC>


let initialState = {
    maxValue:1,
    startValue:0,
    value:0,
    activeMax:true,
    activeStart:true
}

export type InitStateType = typeof initialState

export const appReducer = (state:InitStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'RESET-VALUE':
            return {...state,
            value:0}
        case 'ADD-VALUE':
            return {...state,
                value:action.value + 1}
        case 'SET-START-VALUE':
            return {...state,
                startValue:action.startValue}
        case 'SET-MAX-VALUE':
            return {...state,
                maxValue:action.value}
        case 'SET-ACTIVE-MAX-VALUE':
            return {...state,
                activeMax:action.value}
        case 'SET-ACTIVE-START-VALUE':
            return {...state,
                activeStart:action.value}
        case 'SET-VALUES':
            let copyState = {...state}
            localStorage.setItem('max', copyState.maxValue.toString());
            localStorage.setItem('min', copyState.startValue.toString())
            copyState.value = action.value
            copyState.activeStart = false
            copyState.activeMax= false
            return copyState
        default:
            return state
    }
}

export const actionsCreators = {
    resetValueAC : () => {
    return {type: 'RESET-VALUE'} as const
},
    addValueAC : (value: number) => {
    return {type: 'ADD-VALUE',value} as const
},
    setStartValueComponentAC : (value: number) => {
    return {type: 'SET-START-VALUE',startValue:value} as const
},
    setMaxValueComponentAC : (value: number) => {
    return {type: 'SET-MAX-VALUE',value} as const
},
    setActiveMaxValueAC : (value: boolean) => {
    return {type: 'SET-ACTIVE-MAX-VALUE',value} as const
},
    setActiveStartValueAC : (value: boolean) => {
    return {type: 'SET-ACTIVE-START-VALUE',value} as const
},
    setValuesAC:(value: number)=>{
        return {type: 'SET-VALUES',value} as const
    },
}

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: ActionsType)=> dispatch(ac)
}


