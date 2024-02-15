import { useState } from "react";
import AddForm from "./AddForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";

const Home = () => {
    const [budget, setBudget] = useState(10000);
    localStorage.setItem('budget', budget);
    const [totalAmount, setTotalAmount] = useState(0);

    
    const [expense, setExpense] = useState(() => {
        return JSON.parse(localStorage.getItem('expense')) ? JSON.parse(localStorage.getItem('expense')) : [];
    });

  
   

    return (
        <div className="absolute w-[100vw] h-[full] bg-green-300">
            <Header budget={budget} setBudget={setBudget} totalAmount={totalAmount} ></Header>
            <AddForm setExpense={setExpense} expense={expense}></AddForm>
            <ExpenseTable expense={expense} setExpense={setExpense} totalAmount={totalAmount} setTotalAmount={setTotalAmount}></ExpenseTable>
        </div>
    );
}

export default Home;
