import { ActionType } from "../action-type"
import { Dispatch } from "redux"
import { Action } from '../actions/index'
export const depositMoney = (amount:number)=>{
    return (dispatch:Dispatch<Action>) =>{
        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })
    }
}

export const withDraw = (amount:number)=>{
    return (dispatch:Dispatch<Action>) =>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}

export const bankrupt = (amount:number)=>{
    return (dispatch:Dispatch<Action>) =>{
        dispatch({
            type:ActionType.BANKRUPT
        })
    }
}