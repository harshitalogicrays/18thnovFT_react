// import React, { Component } from 'react'
// class Firstclasscomp extends Component{
//     render(){
//         return(
//             <div>
//                 <h3>First Class Comp </h3>
//             </div>
//         )
//     }
// }
// export default Firstclasscomp

import React, { Component } from 'react'

export default class Firstclasscomp extends Component {
  render() {
    return (
      <React.Fragment>
           <h3>First Class Comp </h3>
      </React.Fragment>
    )
  }
}
