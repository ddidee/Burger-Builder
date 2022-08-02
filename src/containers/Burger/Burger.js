import React, { Component } from "react";
import Bread from '../../components/Layout/Bread/Bread'
import BuildControls from "../../components/Layout/Bread/BuildControls/BuildControls";
//import "../burger/burger.css"
import Classes from "../../containers/Burger/Burger.module.css"

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 100,
    bacon: 70,
    meat: 10
}

class Burger extends Component{

    state = {
        ingredients:{
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 500
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount+1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    deleteIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
          }
 
        const updatedCount = oldCount-1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    // addSalad=()=>{
    //     let saladValue = this.state.ingredients.salad
    //     saladValue++;
    //     console.log(this.state.ingredients.salad)
        
    //     this.setState({
    //         ingredients:{
    //             salad: {saladValue}, 
    //             cheese: this.state.ingredients.cheese,
    //             bacon: this.state.ingredients.bacon,
    //             meat: this.state.ingredients.meat,
    //         }
    //     })
        
    // }

    // addCheese=()=>{
    //     let cheeseValue = this.state.ingredients.cheese
    //     cheeseValue++;
        
    //     this.setState({
    //         ingredients:{
    //             salad: this.state.ingredients.salad, 
    //             cheese: {cheeseValue},
    //             bacon: this.state.ingredients.bacon,
    //             meat: this.state.ingredients.meat,
    //         }
    //     })
    // }

    // addBacon=()=>{
    //     let baconValue = this.state.ingredients.bacon
    //     baconValue++;
        
    //     this.setState({
    //         ingredients:{
    //             salad: this.state.ingredients.salad, 
    //             cheese: this.state.ingredients.cheese,
    //             bacon: {baconValue},
    //             meat: this.state.ingredients.meat,
    //         }
    //     })
    // }

    // addMeat=()=>{
    //     let meatValue = this.state.ingredients.meat
    //     meatValue++;
        
    //     this.setState({
    //         ingredients:{
    //             salad: this.state.ingredients.salad, 
    //             cheese: this.state.ingredients.cheese,
    //             bacon: this.state.ingredients.bacon,
    //             meat: {meatValue},
    //         }
    //     })
    // }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
          }
    
          for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
          }
        return(
            <div className={Classes.content}>
                <Bread ingredients={this.state.ingredients} />
                <BuildControls 
                disabled = {disabledInfo}
                ingredientsAdded={this.addIngredientsHandler}
                ingredientsDeleted={this.deleteIngredientsHandler}
                ></BuildControls>
                {/* <button onClick={this.addSalad} >Salad</button>
                <button onClick={this.addCheese} >Cheese</button>
                <button onClick={this.addBacon} >Bacon</button>
                <button onClick={this.addMeat} >Meat</button> */}

            </div>
        )
    }
}
export default Burger;