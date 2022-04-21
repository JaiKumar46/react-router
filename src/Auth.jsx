// import React from 'react'
// import Hoc from './Hoc'

// const Auth = (props) => {
//   return (
//     <div>Welcome to {props.userName}</div>
//   )
// }

// export default Hoc(Auth)

import {withRouter} from 'react-router-dom'
import React, { Component } from 'react'
import Hoc from './Hoc';
export default class Auth extends Component {
    handleClick=()=>{
        console.log(this.props);
        this.props.histroy.push('/')
    }
  render() {
    return (
      <div>
          <ul>
              <li>
                  <button onClick={handleClick}>Logout</button>
              </li>
          </ul>
      </div>
    )
  }
}


