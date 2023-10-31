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
  };

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <label>
        Description
        <input
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
          onChange={(e) => {
            if (e.target.value === "other") {
              setOtherCat(true);
            } else {
              setSaving({ ...saving, category: e.target.value });
              setOtherCat(false);
            }
          }}
        >
          <option>Select</option>
          {categories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
          <option value="other">Add other</option>
        </select>
      </label>
      <label>
        Amount
        <input
          value={saving.amount}
          type="number"
          onChange={(e) => setSaving({ ...saving, amount: e.target.value })}
        />
      </label>
      <div>
        {otherCat && (
          <label>
            Add Category
            <input
              type="text"
              value={saving.category}
              onChange={(e) =>
                setSaving({ ...saving, category: e.target.value })
              }
            />
          </label>
        )}
      </div>

      <button onClick={() => addSavingsBtn()}>Add</button>
    </div>
  );
}

export default AddSavingsModal;
