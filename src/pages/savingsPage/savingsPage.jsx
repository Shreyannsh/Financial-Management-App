import { useDispatch, useSelector } from "react-redux";
import { fetch_savings } from "../../reducer/actions";
import { useEffect, useState } from "react";
import AddSavingsModal from "../../components/savingsModal/savingsModal";

function SavingsPage() {
  const dispatch = useDispatch();
  useSelector((state) => state.saving);
  const state = useSelector((state) => state.saving);
  const [savings, setSavings] = useState(state);

  const [show, setShow] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState();

  const totalSaving = savings.reduce((acc, crr) => acc + crr.amount, 0);

  const sortByAmount = () => {
    setSavings(savings.sort((a, b) => b.amount - a.amount));
  };

  useEffect(() => {
    dispatch(fetch_savings());
  }, []);

  useEffect(() => {
    sortByAmount();
  }, checkboxValue);

  return (
    <div>
      <h1>Saving page</h1>
      <div>
        <button onClick={() => setShow(!show)}>Add Savings</button>
        <AddSavingsModal onClose={() => setShow(!show)} show={show} />
      </div>

      <div>
        <input
          type="checkbox"
          onChange={(e) => setCheckboxValue(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {savings.map((saving, index) => (
            <tr key={saving._id}>
              <td>{index + 1}</td>
              <td>{saving.description}</td>
              <td>{saving.category}</td>
              <td>&#8377;{saving.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfooter>
          <tr>
            <th>Total Savings</th>
            <td>&#8377; {totalSaving}</td>
          </tr>
        </tfooter>
      </table>
    </div>
  );
}

export default SavingsPage;
