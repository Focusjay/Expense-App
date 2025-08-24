import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Pencil, Trash2 } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" flex flex-col justify-center items-center sm:p-10 md:p-20 min-h-screen font-roboto bg-blue-300 space-y-2">
        <div>
          <h1 className="font-bold text-3xl">FOCUS EXPENSE TRACKER</h1>
        </div>

        {/* BUDGET INPUT */}
        <div className=" p-4 w-96 bg-white rounded-lg">
          <h3 className="mb-4 font-bold">BUDGET INPUT</h3>
          <div className="flex flex-row justify-between">
            <input
              type="number"
              placeholder="$0"
              className="border w-64 px-2 py-1 rounded-md border border-black"
            />
            <button className="bg-blue-700 rounded-lg py-3 px-6 font-bold">
              Add
            </button>
          </div>
        </div>
        {/* EXPENSE INPUT */}
        <div className="p-4 w-96 bg-white rounded-lg">
          <h3 className="mb-4 font-bold">EXPENSE INPUT</h3>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between space-x-2">
              <input
                type="text"
                placeholder="Title"
                className="border w-32 px-2 py-1 rounded-md border border-black"
              />
              <input
                type="number"
                placeholder="Amount"
                className="border w-32 px-2 py-1 rounded-md border border-black"
              />
            </div>
            <button className="bg-blue-700 rounded-lg py-3 px-6 font-bold">
              Add
            </button>
          </div>
        </div>
        {/* SUMMARY */}
        <div className="p-4 w-96 bg-white rounded-lg shadow">
          <h3 className="mb-4 font-bold">SUMMARY</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="border rounded-md p-3.5 text-center">
              <p className="text-bold">Total Budget</p>
              <input
                type="text"
                value="$0"
                readOnly
                className="border w-16 px-2 py-1 rounded-md border-black"
              />
            </div>
            <div className="border rounded-md p-3 text-center">
              <p className="text-bold">Total Expense</p>
              <input
                type="text"
                value="$0"
                readOnly
                className="border w-16 px-2 py-1 rounded-md border-black"
              />
            </div>
            <div className="border rounded-md p-3 text-center">
              <p className="text-bold">Remaining Balance</p>
              <input
                type="text"
                value="$0"
                readOnly
                className="border w-16 px-2 py-1 rounded-md border-black"
              />{" "}
            </div>
          </div>
        </div>
        {/* EXPENSE LIST */}
        <div className="p-4 w-96 bg-white rounded-lg shadow">
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
              <tr>
                <td className="border px-2 py-1 text-left">Example Expense</td>
                <td className="border px-2 py-1 text-left">$0</td>
                <td className="border px-2 py-1 flex flex-row justify between space-x-2">
                  <Pencil size={16} color="black" />
                  <Trash2 size={16} color="red" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="p-4 w-96 bg-white rounded-lg">
          <h3 className="font-bold">EXPENSE LIST</h3>
          <div className="flex flex-row justify-between">
            <h4>Title</h4>
            <h4>Amount</h4>
          </div>
          <div className="flex flex-row justify-between">
            <input type="text" className="border w-32 px-2 py-1 rounded-md" />
            <input type="text" className="border w-32 px-2 py-1 rounded-md" />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
