import React from 'react'

const ErrorDemoChildren = (props) => {
    // try{
    //     if(props.name == 'Joker'){
    //         throw new Error("something went wrong")
    //     }
    //     else {
    //         return (
    //             <div>
    //               <h1>Hello {props.name}</h1>
    //             </div>
    //           )
    //     } 
    // }
    // catch(err){ console.log(err)}

    if(props.name == 'Joker'){
         throw new Error("something went wrong")
    }
    else 
    return (
        <div>
                <h1>Hello {props.name}</h1>
        </div>
    )
    
}

export default ErrorDemoChildren
