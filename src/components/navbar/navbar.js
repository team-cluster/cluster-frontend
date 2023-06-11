import NavbarList from "./navbar-list";
import NavbarButton from "./navbar-button";
import "./style.css";

export default function NavBar() {
  return (
    <div className="navbar-wrapper ">
      <nav className="navbar">
        <NavbarList />
        <NavbarButton />
      </nav>
    </div>
  );
}
