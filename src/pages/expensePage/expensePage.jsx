import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_expense } from "../../reducer/actions";
import ExpenseModal from "../../components/expenseModal/expenseModal";

function ExpensePage() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense);
  const [show, setShow] = useState(false);

  const totalExpense = expenses.reduce((acc, crr) => acc + crr.amount, 0);

  useEffect(() => {
    dispatch(fetch_expense());
  }, []);

  return (
    <div>
      <h1>Expense Page</h1>

      <div>
        <button onClick={() => setShow(!show)}>Add Expense</button>
        <ExpenseModal show={show} />
      </div>
      <table>
        <thead>
          <tr>
            <th> S.No.</th>
            <th> Description </th>
            <th>Category</th>
            <th> Amount </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense._id}>
              <td>{index + 1}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <th>Total Expense</th>
          <td>{totalExpense}</td>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpensePage;
