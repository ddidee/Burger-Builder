import React from "react"
import Aux from "../../hoc/Auxilliary"
import classes from "../Layout/Layout.module.css"

const Layout =(props)=>{
    return(
        <Aux>
            <div className={classes.Content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ea unde temporibus!</div>
            <main >
                
                {props.children}
                <div className={classes.sail}>ddidee</div>
            </main>
        </Aux>
    )
}
export default Layout;
