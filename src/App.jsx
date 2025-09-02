import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Trash2, Pencil } from "lucide-react";
// import ExpenseTrackerList from "./components/ExpenseTrackerList";

function App() {
  // const [count, setCount] = useState(0);
  const [budget, setBudget] = useState("");
  const [budgetInput, setBudgetInput] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [editingExpenseId, setEditingExpenseId] = useState(null);

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

  const handleAddBudget = () => {
    if (!budgetInput || Number(budgetInput) <= 0) return; // simple validation
    setBudget(Number(budgetInput)); // set new budget
    setBudgetInput(""); // clear input
  };

  const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);
  const remainingBalance = budget - totalExpense;

  const handleEditExpense = (id) => {
    const expenseToEdit = expenses.find((e) => e.id === id);
    setExpenseTitle(expenseToEdit.title);
    setExpenseAmount(expenseToEdit.amount);
    setEditingExpenseId(id); // mark which expense is being edited
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-screen px-10 font-roboto bg-blue-300 space-y-2">
        <div>
          <h1 className="font-bold text-3xl">FOCUS EXPENSE TRACKER</h1>
        </div>

        {/* BUDGET INPUT */}
        <div className=" p-4 w-full max-w-xl bg-white rounded-lg">
          <h3 className="mb-4 font-bold">BUDGET INPUT</h3>
          <div className="flex flex-row justify-between">
            <input
              type="number"
              value={budgetInput || budget}
              onChange={(e) => setBudgetInput(e.target.value)}
              placeholder="$0"
              className="border w-96 px-2 py-1 rounded-md border-black"
            />
            <button
              className="bg-blue-700 rounded-lg py-3 px-6 font-bold text-white hover:bg-blue-950"
              onClick={handleAddBudget}
            >
              Add
            </button>
          </div>
        </div>
        {/* EXPENSE INPUT */}
        <div className="p-4 w-full max-w-xl bg-white rounded-lg">
          <h3 className="mb-4 font-bold">EXPENSE INPUT</h3>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between space-x-5">
              <input
                type="text"
                placeholder="Title"
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
                className="border w-full px-2 py-1 rounded-md border-black"
              />
              <input
                type="number"
                placeholder="Amount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                className="border w-full px-2 py-1 rounded-md border-black"
              />
            </div>
            <button
              className="bg-blue-700 rounded-lg py-3 px-6 font-bold text-white hover:bg-blue-950"
              onClick={handleAddExpense}
            >
              {editingExpenseId ? "Update" : "Add"}
            </button>
          </div>
        </div>
        {/* SUMMARY */}
        <div className="p-4 w-full max-w-xl bg-white rounded-lg shadow">
          <h3 className="mb-4 font-bold">SUMMARY</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="border rounded-md p-3.5 text-center">
              <p className="text-bold">Total Budget</p>
              <input
                type="text"
                value={`$${budget.toLocaleString()}.00`}
                readOnly
                className="border w-full px-2 py-1 rounded-md border-black"
              />
            </div>
            <div className="border rounded-md p-3 text-center">
              <p className="text-bold">Total Expense</p>
              <input
                type="text"
                value={`$${totalExpense.toLocaleString()}.00`}
                readOnly
                className="border w-full px-2 py-1 rounded-md border-black"
              />
            </div>
            <div className="border rounded-md p-3 text-center">
              <p className="text-bold">Remaining Balance</p>
              <input
                type="text"
                value={`$${remainingBalance.toLocaleString()}.00`}
                readOnly
                className="border w-full px-2 py-1 rounded-md border-black"
              />{" "}
            </div>
          </div>
        </div>
        {/* EXPENSE LIST */}
        <div className="p-4 w-full max-w-xl bg-white rounded-lg shadow">
          <h3 className="font-bold mb-4">EXPENSE LIST</h3>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border px-2 py-1 text-left">Tittle</th>
                <th className="border px-2 py-1 text-right"> Amount</th>
                <th className="border px-2 py-1 text-right"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="border px-2 py-1 text-left">
                    {expense.title}
                  </td>
                  <td className="border px-2 py-1 text-left">
                    ${expense.amount.toLocaleString()}.00
                  </td>
                  <td className="border px-2 py-1 flex flex-row space-x-2">
                    <Pencil
                      size={16}
                      color="black"
                      onClick={() => handleEditExpense(expense.id)}
                    />
                    <Trash2
                      size={16}
                      color="red"
                      onClick={() =>
                        setExpenses(expenses.filter((e) => e.id !== expense.id))
                      }
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}

              {/* <tr>
                <td className="border px-2 py-1 text-left">Trip to Miami</td>
                <td className="border px-2 py-1 text-left">$5,000,000.00</td>
                <td className="border px-2 py-1 flex flex-row justify between space-x-2">
                  <Pencil size={16} color="black" />
                  <Trash2 size={16} color="red" />
                </td> */}
              {/* </tr>
              // <tr>
              //   <td className="border px-2 py-1 text-left">Hotel Expenses</td>
              //   <td className="border px-2 py-1 text-left">$500,000.00</td>
              //   <td className="border px-2 py-1 flex flex-row justify between space-x-2">
              //     <Pencil size={16} color="black" />
              //     <Trash2 size={16} color="red" />
              //   </td>
              // </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
