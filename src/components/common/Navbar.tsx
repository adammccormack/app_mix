import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="to-do-list">To Do List</NavLink>
        </li>
      </ul>
    </nav>
  );
};
