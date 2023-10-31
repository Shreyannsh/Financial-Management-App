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
    <div>
      <label>
        Description
        <input
          value={income.description}
          type="text"
          onChange={(e) =>
            setIncome({ ...income, description: e.target.value })
          }
        />
      </label>
      <label>
        Amount
        <input
          value={income.amount}
          type="number"
          onChange={(e) => setIncome({ ...income, amount: e.target.value })}
        />
      </label>

      <div>
        <button onClick={() => addIncomeBtn()}>Add</button>
      </div>
    </div>
  );
}

export default IncomeModal;
