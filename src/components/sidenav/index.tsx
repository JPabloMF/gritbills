import { Link } from "react-router-dom";
import Logo from "../logo";

function SideNav() {
  return (
    <div>
      <Logo />
      <ul>
        <li>
          <Link to="/dashboard/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/bills">Bills</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
