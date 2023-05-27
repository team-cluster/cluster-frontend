import NavbarList from "./navbar-list";
import NavbarButton from "./navbar-button";
import "./style.css";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <NavbarList />
        <NavbarButton />
      </div>
    </div>
  );
}
