import { useDispatch, useSelector } from "react-redux";
import { fetch_savings } from "../../reducer/actions";
import { useEffect, useState } from "react";
import AddSavingsModal from "../../components/savingsModal/savingsModal";

function SavingsPage() {
  const dispatch = useDispatch();
  const savings = useSelector((state) => state.saving);

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetch_savings());
  }, []);

  return (
    <div>
      <h1>Saving page</h1>
      <div>
        <button onClick={() => setShow(!show)}>Add Savings</button>
        <AddSavingsModal onClose={() => setShow(!show)} show={show} />
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {savings.map((saving, index) => (
            <tr key={saving._id}>
              <td>{index + 1}</td>
              <td>{saving.description}</td>
              <td>{saving.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SavingsPage;
