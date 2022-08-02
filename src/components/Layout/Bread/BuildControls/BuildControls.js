import React from "react";
import classes from "../BuildControls/BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";


const Control =[
    {label:"Salad", type:"salad"},
    {label:"Cheese", type:"cheese"},
    {label:"Bacon", type:"bacon"},
    {label:"Meat", type:"meat"}

]
const BuildControls =(props)=>{

    
    return(
        <div className={classes.BuildControls}>{
            
                Control.map((ctrl)=>{
                    return(
                    <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={()=>props.ingredientsAdded(ctrl.type)}
                    deleted={()=>props.ingredientsDeleted(ctrl.type)}
                    ></BuildControl>
                )})}

                {/* <BuildControl label='Salad' ></BuildControl>
                <BuildControl label='Cheese' ></BuildControl>
                <BuildControl label='Bacon' ></BuildControl> */}
            
        </div>
    )
    
}

export default BuildControls;