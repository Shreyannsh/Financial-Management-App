import "./WelcomePage.css";

import { useEffect } from "react";
import {
  fetch_expense,
  fetch_income,
  fetch_savings,
} from "../../reducer/actions";

function WelcomePage() {
  useEffect(() => {
    fetch_expense();
    fetch_income();
    fetch_savings();
  }, []);

  return (
    <div className="welcomePage">
      <h1 className="welcomeMsg">Welcome to Finance Managment App</h1>
      <h5 className="subLines1">Enjoy various feature desgined for you.</h5>
      <h5 className="subLines2">Choose option from navigationbar</h5>
    </div>
  );
}

export default WelcomePage;
