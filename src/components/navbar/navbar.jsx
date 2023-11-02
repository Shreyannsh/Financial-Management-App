import "./navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="pageLink" to="/incomePage">
        Income Management
      </Link>
      <Link className="pageLink" to="/expensePage">
        Expense Management
      </Link>
      <Link className="pageLink" to="/savingPage">
        Saving Management
      </Link>
      <Link className="pageLink" to="/financialReport">
        Financial Report
      </Link>
    </div>
  );
}

export default Navbar;
