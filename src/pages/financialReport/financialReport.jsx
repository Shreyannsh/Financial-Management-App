import "./financialReport.css";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import {
  fetch_expense,
  fetch_income,
  fetch_savings,
} from "../../reducer/actions";

import IncomeVsExpense from "../../components/incomeVsExpense/incomeVsExpense";
import ExpenseBreakdown from "../../components/expenseBreakdown/expenseBreakdown";
import { useDispatch } from "react-redux";

function FinancialReport() {
  const dispatch = useDispatch();

  const [option, setOption] = useState("");
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const showOption = () => {
    if (option === "report1") {
      setShowTwo(false);
      setShowOne(true);
    } else if (option === "report2") {
      setShowOne(false);
      setShowTwo(true);
    } else {
      toast.error("Please select a report !");
      setShowOne(false);
      setShowTwo(false);
    }
  };

  useEffect(() => {
    dispatch(fetch_expense());
    dispatch(fetch_income());
    dispatch(fetch_savings());
    dispatch({ type: "IS_ACTIVE", payload: "financialReportPage" });
  }, []);

  return (
    <div className="financialReport">
      <div>
        <h1 className="reportHeading">Type of report</h1>
        <div className="reportHeader">
          <select
            className="reportOption"
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">Select</option>
            <option value="report1">Income vs. Expenses</option>
            <option value="report2">Expense Breakdown</option>
          </select>

          <button className="generateBtn" onClick={() => showOption()}>
            Generate Report
          </button>
        </div>
      </div>

      <IncomeVsExpense show={showOne} />
      <ExpenseBreakdown show={showTwo} />
    </div>
  );
}

export default FinancialReport;
