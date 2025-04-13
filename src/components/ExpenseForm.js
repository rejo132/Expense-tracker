import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    amount: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.description || !formData.amount) return;
    onAddExpense({
      date: formData.date,
      description: formData.description,
      amount: parseFloat(formData.amount),
      category: formData.category || "Uncategorized"
    });
    setFormData({ date: "", description: "", amount: "", category: "" });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Amount
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          step="0.01"
          required
        />
      </label>
      <label>
        Category
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;