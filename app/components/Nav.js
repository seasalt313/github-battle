var React = require('react');
// var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav(){
  return(
    <ul className="nav">
      <li>
        <NavLink exact activeClassName='active' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/battle">Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/popular">Popular</NavLink>
      </li>
    </ul>
  )
}

// using link:
// function Nav(){
//   return(
//     <ul className="nav">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/battle">Battle</Link>
//       </li>
//       <li>
//         <Link to="/popular">Popular</Link>
//       </li>
//     </ul>
//   )
// }

module.exports = Nav;
