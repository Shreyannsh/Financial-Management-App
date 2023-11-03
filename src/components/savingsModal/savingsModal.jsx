import "./savingsModal.css";
import "../../commonCSS.css";

import { toast } from "react-toastify";

import { useState } from "react";
import { add_savings } from "../../reducer/actions";
import { useDispatch } from "react-redux";

function AddSavingsModal(props) {
  const dispatch = useDispatch();
  const [saving, setSaving] = useState({
    amount: 0,
    description: "",
    category: "",
  });
  const [otherCat, setOtherCat] = useState(false);

  const [categories, setCategories] = useState([
    "Marriage",
    "Bike",
    "Car",
    "Education",
  ]);

  const addSavingsBtn = () => {
    const values = Object.values(saving);
    console.log(values);

    if (!values.includes("") || values.includes(0)) {
      console.log("hi");
      dispatch(add_savings(saving));
      setOtherCat(false);
      if (!categories.includes(saving.category)) {
        setCategories([...categories, saving.category]);
      }

      setSaving({
        amount: 0,
        description: "",
        category: "",
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
        Description
        <input
          className="inputField"
          value={saving.description}
          type="text"
          onChange={(e) =>
            setSaving({ ...saving, description: e.target.value }) &&
            setOtherCat(false)
          }
        />
      </label>
      <label>
        Category
        <select
          className="inputField"
          onChange={(e) => {
            if (e.target.value === "other") {
              setOtherCat(true);
            } else {
              setSaving({ ...saving, category: e.target.value });
              setOtherCat(false);
            }
          }}
        >
          <option value="">Select</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value="other">Add other</option>
        </select>
      </label>
      <div>
        {otherCat && (
          <label>
            Add Category
            <input
              className="inputField addCategory"
              type="text"
              value={saving.category}
              onChange={(e) =>
                setSaving({ ...saving, category: e.target.value })
              }
            />
          </label>
        )}
      </div>

      <label>
        Amount
        <input
          className="inputField amount"
          value={saving.amount}
          type="number"
          onChange={(e) => setSaving({ ...saving, amount: e.target.value })}
        />
      </label>

      <button className="addBtn" onClick={() => addSavingsBtn()}>
        Add
      </button>
    </div>
  );
}

export default AddSavingsModal;
