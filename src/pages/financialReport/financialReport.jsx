import "./financialReport.css";

import { useState } from "react";

import IncomeVsExpense from "../../components/incomeVsExpense/incomeVsExpense";
import ExpenseBreakdown from "../../components/expenseBreakdown/expenseBreakdown";

function FinancialReport() {
  const [option, setOption] = useState("");
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const showOption = () => {
    if (option === "report1") {
      setShowTwo(false);
      setShowOne(true);
    }
    if (option === "report2") {
      setShowOne(false);
      setShowTwo(true);
    } else {
      //add toast for error
    }
  };

  return (
    <div className="financialReport">
      <div>
        <h2>Type of report</h2>
        <select onChange={(e) => setOption(e.target.value)}>
          <option value="">Select</option>
          <option value="report1">Income vs. Expenses</option>
          <option value="report2">Expense Breakdown</option>
        </select>
      </div>

      <button onClick={() => showOption()}>Generate Report</button>

      <IncomeVsExpense show={showOne} />
      <ExpenseBreakdown show={showTwo} />
    </div>
  );
}

export default FinancialReport;
