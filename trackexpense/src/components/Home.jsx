import { useState } from "react";
import AddForm from "./AddForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";
import { myExpense } from "../myExpense";

const Home = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [budget, setBudget] = useState(10000)
    const[expense,setExpense] =useState(myExpense);
    return (
        <div className="absolute w-screen h-screen bg-white">
            <Header budget={budget} setBudget={setBudget} totalAmount={totalAmount} ></Header>
            <AddForm setExpense={setExpense}></AddForm>
            <ExpenseTable expense={expense} totalAmount={totalAmount} setTotalAmount={setTotalAmount}></ExpenseTable>
        </div>
    );
}

export default Home;
