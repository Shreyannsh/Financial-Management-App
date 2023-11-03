import { useSelector } from "react-redux";
import "./navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  const isActive = useSelector((state) => state.isActive);

  return (
    <div className="navbar">
      <Link
        className={isActive === "incomePage" ? "isActive" : "pageLink"}
        to="/incomePage"
      >
        Income Management
      </Link>
      <Link
        className={isActive === "expensePage" ? "isActive" : "pageLink"}
        to="/expensePage"
      >
        Expense Management
      </Link>
      <Link
        className={isActive === "savingsPage" ? "isActive" : "pageLink"}
        to="/savingPage"
      >
        Saving Management
      </Link>
      <Link
        className={isActive === "financialReportPage" ? "isActive" : "pageLink"}
        to="/financialReport"
      >
        Financial Report
      </Link>
    </div>
  );
}

export default Navbar;
