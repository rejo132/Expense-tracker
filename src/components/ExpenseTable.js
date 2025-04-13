import React from "react";
import ExpenseRow from "./ExpenseRow";

function ExpenseTable({ expenses, onDeleteExpense, onSort, sortBy }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => onSort("date")}>
            Date {sortBy === "date" && "↑"}
          </th>
          <th onClick={() => onSort("description")}>
            Description {sortBy === "description" && "↑"}
          </th>
          <th onClick={() => onSort("amount")}>
            Amount {sortBy === "amount" && "↑"}
          </th>
          <th onClick={() => onSort("category")}>
            Category {sortBy === "category" && "↑"}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <ExpenseRow
            key={expense.id}
            expense={expense}
            onDelete={() => onDeleteExpense(expense.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;