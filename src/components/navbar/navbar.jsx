import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/incomePage">Income Management</Link>
      <Link to="/expensePage">Expense Management</Link>
      <Link to="/savingPage">Saving Management</Link>
      <Link to="/financialReport">Financial Report</Link>
    </div>
  );
}

export default Navbar;
