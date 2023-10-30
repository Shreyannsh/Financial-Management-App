import { useState } from "react";
import { useDispatch } from "react-redux";
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
    dispatch(add_expense(expense));
    if (!categories.includes(expense.category)) {
      setCategories([...categories, expense.category]);
    }
    setOtherCat(false);
  };

  const [otherCat, setOtherCat] = useState(false);

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <label>
        Description
        <input
          type="text"
          onChange={(e) =>
            setExpense({ ...expense, description: e.target.value })
          }
        />
      </label>
      <label>
        Category
        <select
          onChange={(e) =>
            e.target.value === "other"
              ? setOtherCat(true)
              : setExpense({ ...expense, category: e.target.value })
          }
        >
          <option>Select</option>
          {categories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
          <option value="other">Add other</option>
        </select>
      </label>

      <div>
        {otherCat && (
          <label>
            Add Category
            <input
              type="text"
              onChange={(e) =>
                setExpense({ ...expense, category: e.target.value })
              }
            />
          </label>
        )}
      </div>

      <label>
        Amount
        <input
          type="text"
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
      </label>

      <button onClick={() => expenseAddBtn()}>Add</button>
    </div>
  );
}

export default ExpenseModal;
