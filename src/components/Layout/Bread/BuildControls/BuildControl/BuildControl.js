import React from "react";
import classes from "../BuildControl/BuildControl.module.css"
import Aux from "../../../../../hoc/Auxilliary";

const BuildControl =(props)=>{
    return (
    <Aux>
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.added}>Add</button>
            <button className={classes.Less} onClick={props.deleted}>Delete</button>
            <h1 className={classes.Header}>PRICE:</h1>

        </div>
    </Aux>
    )
}

export default BuildControl;