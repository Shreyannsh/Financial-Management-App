import { useEffect, useState } from "react";
import { fetch_income } from "../../reducer/actions";

import { useDispatch, useSelector } from "react-redux";
import IncomeModal from "../../components/incomeModal/incomeModal";

function IncomePage() {
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.income);

  const [show, setShow] = useState(false);

  const totalIncome = incomeData.reduce((acc, crr) => acc + crr.amount, 0);

  useEffect(() => {
    dispatch(fetch_income());
  }, []);

  return (
    <div>
      <h1>Income Page</h1>
      <div>
        <button onClick={() => setShow(!show)}>Add Income</button>
        <IncomeModal show={show} />
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Source</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomeData?.map((income, index) => (
            <tr key={income._id}>
              <td>{index + 1}</td>
              <td>{income.description}</td>
              <td>{income.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <th>Total Income</th>
          <td>{totalIncome}</td>
        </tfoot>
      </table>
    </div>
  );
}

export default IncomePage;
