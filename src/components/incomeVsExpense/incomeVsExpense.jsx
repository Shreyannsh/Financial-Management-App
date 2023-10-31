import { useSelector } from "react-redux";

function IncomeVsExpense(props) {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);
  const saving = useSelector((state) => state.saving);

  const totalIncome = income?.reduce((acc, crr) => acc + crr.amount, 0);
  const totalExpense = expense?.reduce((acc, crr) => acc + crr.amount, 0);
  const totalSaving = saving?.reduce((acc, crr) => acc + crr.amount, 0);

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Total Income</th>
            <th>Total Expense</th>
            <th>Total Saving</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalIncome}</td>
            <td>{totalExpense}</td>
            <td>{totalSaving}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IncomeVsExpense;
