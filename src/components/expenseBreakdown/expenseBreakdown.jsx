import { useSelector } from "react-redux";

function ExpenseBreakdown(props) {
  const expenses = useSelector((state) => state.expense);

  const expenseBreakdown = expenses.reduce((acc, crr) => {
    const cat = acc?.find(
      (category) =>
        category?.category.toLowerCase() === crr?.category.toLowerCase()
    );

    if (!cat) {
      acc = [...acc, { category: crr.category, total: crr.amount }];
    } else {
      acc = acc.map((cat) => {
        if (cat.category.toLowerCase() === crr.category.toLowerCase()) {
          return { ...cat, total: cat.total + crr.amount };
        } else {
          return cat;
        }
      });
    }
    return acc;
  }, []);

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <h1>Expense Breakdown</h1>

      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Category</th>
            <th>Expense</th>
          </tr>
        </thead>
        <tbody>
          {expenseBreakdown?.map((cat, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <th>{cat.category}</th>
              <td>&#8377; {cat.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseBreakdown;
