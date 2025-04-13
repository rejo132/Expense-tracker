import React from "react";

function ExpenseRow({ expense, onDelete }) {
  return (
    <tr>
      <td>{expense.date}</td>
      <td>{expense.description}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>{expense.category || "Uncategorized"}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ExpenseRow;