import "./expensePage.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_expense } from "../../reducer/actions";
import ExpenseModal from "../../components/expenseModal/expenseModal";

function ExpensePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.expense);
  const [show, setShow] = useState(false);
  const [sortOption, setSortOption] = useState();
  const [filterOption, setFilterOption] = useState();

  const totalExpense = state.reduce((acc, crr) => acc + crr.amount, 0);

  const categoryList = state.reduce((acc, crr) => {
    const categoryCheck = acc.find(
      (categoryName) =>
        categoryName.toLowerCase() === crr.category.toLowerCase()
    );
    if (!categoryCheck) {
      acc = [...acc, crr.category];
    }
    return acc;
  }, []);

  const sortAndFilter = () => {
    let data = [...state];

    if (filterOption) {
      data = data.filter((expense) => expense.category === filterOption);
    }

    if (sortOption) {
      data = data.sort((a, b) => {
        if (sortOption === "highToLow") {
          return b.amount - a.amount;
        } else if (sortOption === "lowToHigh") {
          return a.amount - b.amount;
        }
      });
    }

    return data;
  };

  const expenses = sortAndFilter();

  useEffect(() => {
    dispatch(fetch_expense());
    dispatch({ type: "IS_ACTIVE", payload: "expensePage" });
  }, []);

  return (
    <div className="expensePage">
      <h1>Expense Page</h1>

      <div className="buttonSection">
        <button className="addMainBtn" onClick={() => setShow(!show)}>
          Add Expense
        </button>
        <span>
          <span>
            <b>SortBy- </b>
          </span>
          <label>
            <input
              type="radio"
              name="sortByAmount"
              value="highToLow"
              onChange={(e) => setSortOption(e.target.value)}
            />
            High To Low
          </label>
          <label>
            <input
              type="radio"
              name="sortByAmount"
              value="lowToHigh"
              onChange={(e) => setSortOption(e.target.value)}
            />
            Low to High
          </label>
        </span>

        <label>
          <select
            className="filterSelect"
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="">All</option>
            {categoryList.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
          Filter By Category
        </label>
      </div>

      <ExpenseModal show={show} />

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
              <td>&#8377; {expense.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <th>Total Expense</th>
            <td>&#8377; {totalExpense}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpensePage;
