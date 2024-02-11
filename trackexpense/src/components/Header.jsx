import { useEffect, useState } from "react";

const Header = (prop) => {
    const[spentAmt ,setSpentAmt] =useState(0);
    useEffect(()=>{
        setSpentAmt(prop.totalAmount-spentAmt);
    },[prop.totalAmount]);

    useEffect(()=>{
        prop.setBudget(prop.budget-spentAmt);
    },[spentAmt]);

  
    return (
        <div className='flex w-full h-14 bg-slate-100
                        items-center justify-between
                            '>
            <div className='min-w-[150px] pl-5 font-semibold text-2xl'>
                <p>Expense Tracker</p>
            </div>
            <p className="px-5 ">{ prop.budget>=0 ? `Total ${prop.budget}`: "Overbudget" }</p>
        </div>
    );
}

export default Header;
