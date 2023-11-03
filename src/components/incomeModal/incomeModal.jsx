//import "./incomeModal.css";
import "../../commonCSS.css";

import { toast } from "react-toastify";

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
    const values = Object.values(income);
    if (!values.includes("") || values.includes(0)) {
      dispatch(add_income(income));
      setIncome({
        amount: 0,
        description: "",
      });
    } else {
      toast.error("Please provide all values !");
    }
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
