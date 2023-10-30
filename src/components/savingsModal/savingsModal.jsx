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
  const [ohterCat, setOtherCat] = useState(false);

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
            setSaving({ ...saving, description: e.target.value })
          }
        />
      </label>
      <label>
        Category
        <select
          onChange={(e) =>
            e.target.value === "other"
              ? setOtherCat(true)
              : setSaving({ ...saving, category: e.target.value })
          }
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
          type="number"
          onChange={(e) => setSaving({ ...saving, amount: e.target.value })}
        />
      </label>
      <div>
        {ohterCat && (
          <label>
            Add Category
            <input
              type="text"
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
