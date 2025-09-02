const handleAddExpense = () => {
  if (!expenseTitle || !expenseAmount || Number(expenseAmount) <= 0) return;

  if (editingExpenseId) {
    // update existing expense
    setExpenses(
      expenses.map((e) =>
        e.id === editingExpenseId
          ? { ...e, title: expenseTitle, amount: Number(expenseAmount) }
          : e
      )
    );
    setEditingExpenseId(null); // clear editing state
  } else {
    const newExpense = {
      id: Date.now(), // unique ID
      title: expenseTitle,
      amount: Number(expenseAmount),
    };
    setExpenses([...expenses, newExpense]);
  }

  setExpenseTitle("");
  setExpenseAmount("");
};

export default Expense;
