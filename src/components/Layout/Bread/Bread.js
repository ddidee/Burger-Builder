import React from "react";
import classes from "../Bread/Bread.module.css";
import BurgerIngredient from "../Bread/BurgerIngredients/BurgerIngredients";

const Bread =(props)=>{
   let newIngredient = Object.keys(props.ingredients).map((ingKey)=>{
        return [...Array(props.ingredients[ingKey])].map((_, i)=>{
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    if (newIngredient.length===0) {
        newIngredient= <h1>Please Start Adding Ingredients</h1>
    }
    return(
        <div className={classes.Bread}>
            <BurgerIngredient type = 'bread-top'></BurgerIngredient>
            {newIngredient}
            <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
            {/* <BurgerIngredient type = 'bread-top'></BurgerIngredient>
            
            <BurgerIngredient type = 'meat'></BurgerIngredient>
            <BurgerIngredient type = 'cheese'></BurgerIngredient>
            <BurgerIngredient type = 'bacon'></BurgerIngredient>
            <BurgerIngredient type = 'salad'></BurgerIngredient>
            <BurgerIngredient type = 'bread-bottom'></BurgerIngredient> */}
        </div>
    )
}

export default Bread;