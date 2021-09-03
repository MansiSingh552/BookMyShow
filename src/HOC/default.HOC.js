//higher order component-tranform component into another component
//Adding extra functionality to existing components
import React from "react";
import { Route } from "react-router-dom"; 

//layout
import DefaultLayout from "../Layouts/default.layouts";


const DefaultHOC = ({ component: Component, ...rest}) => {

    //component
    //props -> path exact
    return(
        <>
        <Route 
         {...rest}

        component = {(props) => (
            <DefaultLayout>
                <Component {...props}/>
            </DefaultLayout>
        
        )
        }
        />
        </>
    )
}

    
   
export default DefaultHOC;    