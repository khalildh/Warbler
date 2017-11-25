import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, NavLink} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const s={color: "red"}; //active style

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Link to="/">HOME</Link>
//         <Link to="/about">ABOUT</Link>
//         <div style={{fontSize: '3em',
//                     margin: '25px'}}>
//           <SwitchDemo />
//         </div>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <NavLink exact activeStyle={s} to="/">
      Home
    </NavLink>
    <NavLink exact activeStyle={s} to="/about">
      ABOUT
    </NavLink>
    <div style={{fontSize: '3em',
                        margin: '25px'}}>
      <SwitchDemo />
    </div>
  </div>
)



export default App;
