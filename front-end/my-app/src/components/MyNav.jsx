

import { NavLink } from 'react-router-dom';


function MyNav() {
 return (
   <nav>
     <ul>
       <li>
         <NavLink exact to="/" isActive={(match, location) => location.pathname === "/"} className="nav-link">
           Home
         </NavLink>
       </li>
       <li>
         <NavLink exact to="/about" isActive={(match, location) => location.pathname.startsWith("/about")} className="nav-link">
           About
         </NavLink>
       </li>
     </ul>
   </nav>
 );
}




export default MyNav;
