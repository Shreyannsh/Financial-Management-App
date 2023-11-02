import "./savingsPage.css";

import { useDispatch, useSelector } from "react-redux";
import { fetch_savings } from "../../reducer/actions";
import { useEffect, useState } from "react";
import AddSavingsModal from "../../components/savingsModal/savingsModal";

function SavingsPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.saving);
  const [show, setShow] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [SortByOption, setSortByOption] = useState("");

  const totalSaving = state.reduce((acc, crr) => acc + crr.amount, 0);

  const categoryList = state?.reduce(
    (acc, crr) =>
      !acc?.includes(crr.category) ? (acc = [...acc, crr.category]) : acc,
    []
  );

  const filterAndSortData = () => {
    let data = [...state];

    if (filterOption) {
      const filteredArray = data.filter(
        (savings) => savings.category === filterOption
      );
      data = filteredArray;
    }

    if (SortByOption) {
      const sortedArray = data.sort((a, b) => {
        if (SortByOption === "highToLow") {
          return b.amount - a.amount;
        } else {
          return a.amount - b.amount;
        }
      });
      data = sortedArray;
    }
    return data;
  };

  const savings = filterAndSortData();

  useEffect(() => {
    dispatch(fetch_savings());
  }, []);

  return (
    <div className="savingsPage">
      <h1>Saving page</h1>
      <div className="buttonSection">
        <button className="addMainBtn" onClick={() => setShow(!show)}>
          Add Savings
        </button>

        <span>
          <span>Sort by -</span>
          <label>
            High to Low
            <input
              type="radio"
              value="highToLow"
              name="sortByAmount"
              onChange={(e) => setSortByOption(e.target.value)}
            />
          </label>
          <label>
            Low to High
            <input
              type="radio"
              value="lowToHigh"
              name="sortByAmount"
              onChange={(e) => setSortByOption(e.target.value)}
            />
          </label>
          <label>
            <select onChange={(e) => setFilterOption(e.target.value)}>
              <option value="">All</option>
              {categoryList?.map((categoryName) => (
                <option value={categoryName}>{categoryName}</option>
              ))}
            </select>
            Filter By Category
          </label>
        </span>
      </div>

      <AddSavingsModal onClose={() => setShow(!show)} show={show} />

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
              <td>&#8377; {saving.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <th>Total Savings</th>
            <td>&#8377; {totalSaving}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default SavingsPage;
