import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="text-white bg-slate-950 text-2xl p-5">
        <ul className="flex items-center justify-center gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
