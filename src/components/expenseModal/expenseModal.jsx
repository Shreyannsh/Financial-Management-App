//import "./expenseModal.css";
import "../../commonCSS.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { add_expense } from "../../reducer/actions";

function ExpenseModal(props) {
  const dispatch = useDispatch();

  const [expense, setExpense] = useState({
    description: "",
    category: "",
    amount: 0,
  });

  const [categories, setCategories] = useState([
    "bike",
    "car",
    "marketing",
    "gadgets",
  ]);

  const expenseAddBtn = () => {
    const values = Object.values(expense);
    if (values.includes("") || values.includes(0)) {
      toast.error("Please provide all values !");
    } else {
      dispatch(add_expense(expense));
      if (!categories.includes(expense.category)) {
        setCategories([...categories, expense.category]);
      }
      setOtherCat(false);
      setExpense({
        amount: 0,
        description: "",
        category: "",
      });
    }
  };

  const [otherCat, setOtherCat] = useState(false);

  if (!props.show) {
    return null;
  }

  return (
    <div className="addModal">
      <label>
        Description
        <input
          className="inputField"
          value={expense.description}
          type="text"
          onChange={(e) =>
            setExpense({ ...expense, description: e.target.value })
          }
        />
      </label>
      <label>
        Category
        <select
          className="inputField"
          onChange={(e) => {
            if (e.target.value === "other") {
              setOtherCat(true);
            } else {
              setOtherCat(false);
              setExpense({ ...expense, category: e.target.value });
            }
          }}
        >
          <option value="">Select</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value="other">Add other</option>
        </select>
      </label>

      {otherCat && (
        <label>
          Add Category
          <input
            className="inputField addCategory"
            type="text"
            value={expense.category}
            onChange={(e) =>
              setExpense({ ...expense, category: e.target.value })
            }
          />
        </label>
      )}

      <label>
        Amount
        <input
          className="inputField amount"
          type="text"
          value={expense.amount}
          onChange={(e) =>
            setExpense({ ...expense, amount: Number(e.target.value) })
          }
        />
      </label>

      <button className="addBtn" onClick={() => expenseAddBtn()}>
        Add
      </button>
    </div>
  );
}

export default ExpenseModal;
