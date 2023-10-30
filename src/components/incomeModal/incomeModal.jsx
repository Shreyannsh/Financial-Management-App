import { useDispatch } from "react-redux";
import { add_income } from "../../reducer/actions";
import { useState } from "react";

function IncomeModal(props) {
  const dispatch = useDispatch();

  const [income, setIncome] = useState({
    description: "",
    amount: 0,
  });

  console.log(income);

  const addIncomeBtn = () => {
    dispatch(add_income(income));
  };

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
            setIncome({ ...income, description: e.target.value })
          }
        />
      </label>
      <label>
        Amount
        <input
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
