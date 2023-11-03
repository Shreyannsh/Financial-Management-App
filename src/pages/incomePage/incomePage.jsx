import "./incomePage.css";

import { useEffect, useState } from "react";
import { fetch_income } from "../../reducer/actions";

import { useDispatch, useSelector } from "react-redux";
import IncomeModal from "../../components/incomeModal/incomeModal";

function IncomePage() {
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.income);

  const [show, setShow] = useState(false);
  const [sortByOption, setSortByOption] = useState("");

  const totalIncome = incomeData.reduce((acc, crr) => acc + crr.amount, 0);

  const sortByAmount = () => {
    let data = [...incomeData];

    if (sortByOption) {
      data = data.sort((a, b) => {
        if (sortByOption === "highToLow") {
          return b.amount - a.amount;
        } else {
          return a.amount - b.amount;
        }
      });
    }

    return data;
  };

  const income = sortByAmount();

  useEffect(() => {
    dispatch(fetch_income());
    dispatch({ type: "IS_ACTIVE", payload: "incomePage" });
  }, []);

  return (
    <div className="incomePage">
      <h1>Income Page</h1>

      <div className="buttonSection">
        <button className="addMainBtn" onClick={() => setShow(!show)}>
          Add Income
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
              onChange={(e) => setSortByOption(e.target.value)}
            />
            High to Low
          </label>
          <label>
            <input
              type="radio"
              name="sortByAmount"
              value="lowtoHigh"
              onChange={(e) => setSortByOption(e.target.value)}
            />
            Low to High
          </label>
        </span>
      </div>

      <IncomeModal show={show} />

      <table className="table">
        <thead className="tableHead">
          <tr>
            <th>S.No.</th>
            <th>Source</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {income?.map((income, index) => (
            <tr key={income._id}>
              <td>{index + 1}</td>
              <td>{income.description}</td>
              <td>&#8377; {income.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <th>Total Income</th>
            <td>&#8377; {totalIncome}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default IncomePage;
