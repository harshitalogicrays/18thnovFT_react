import React, { Fragment } from 'react'

// const PropsDemoinfun = (props) => {
//     //props = {username:"Atul"}
//     // console.log(props)
//     // props.username = "Ram" //readonly
//   return (
//     <Fragment>
//         <h1>Props Demo in Functional Component</h1>
//         {props.username}<br/>
//         {props.mobileno}
//     </Fragment>
//   )
// }

const PropsDemoinfun = ({username,mobileno=1234,isActive,children}) => {
    return (
    <Fragment>
        <h1>Props Demo in Functional Component</h1>
        {/* {username}<br/>
        {mobileno}<br/> */}
        {/* {children} */}
        {/* {children?.[0]} */}
        {/* {children instanceof Array ? <>{children[0]}</> : <>Only one Children</>} <br/> */}

        {/* {isActive && <h1>{username} is active user</h1>} */}
        {isActive || <h1>{username} is not active user</h1>}
    </Fragment>
  )
}

export default PropsDemoinfun
