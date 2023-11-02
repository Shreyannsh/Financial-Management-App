import "./incomeModal.css";
import { useDispatch } from "react-redux";
import { add_income } from "../../reducer/actions";
import { useState } from "react";

function IncomeModal(props) {
  const dispatch = useDispatch();

  const [income, setIncome] = useState({
    description: "",
    amount: 0,
  });

  const addIncomeBtn = () => {
    dispatch(add_income(income));
    setIncome({
      amount: 0,
      description: "",
    });
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="addModal">
      <label>
        <b> Description </b>
        <input
          className="inputField"
          value={income.description}
          type="text"
          onChange={(e) =>
            setIncome({ ...income, description: e.target.value })
          }
        />
      </label>
      <label>
        <b>Amount</b>
        <input
          className="inputField"
          value={income.amount}
          type="number"
          onChange={(e) => setIncome({ ...income, amount: e.target.value })}
        />
      </label>

      <button className="addBtn" onClick={() => addIncomeBtn()}>
        Add
      </button>
    </div>
  );
}

export default IncomeModal;
