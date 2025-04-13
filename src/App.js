import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, date: "2023-10-01", description: "Groceries", amount: 50, category: "Food" },
    { id: 2, date: "2023-10-02", description: "Gas", amount: 30, category: "Travel" },
    { id: 3, date: "2023-10-03", description: "Dinner", amount: 40, category: "Food" },
  ]);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSort = (field) => {
    setSortBy(field);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchText.toLowerCase()) ||
    (expense.category || "").toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortBy) return 0;
    if (sortBy === "amount") return a.amount - b.amount;
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable
        expenses={sortedExpenses}
        onDeleteExpense={handleDeleteExpense}
        onSort={handleSort}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;