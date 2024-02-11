import { useEffect } from "react";

const ExpenseTable = (prop) => {
    useEffect(() => {
        let total = 0;
        prop.expense.forEach((element) => {
            total +=  parseInt(element.amount);
        });
        prop.setTotalAmount(total);
    }, [prop.expense]);

return (
    <div className='bg-slate-100 h-[500px] font-semibold'>
        <div className="flex justify-center gap-3">
            <p>Title</p>
            <p>Category</p>
            <p>Amount</p>
        </div>
        {
            prop.expense.map((element) => {
                return (<div key={element.id} className="flex justify-center gap-3">
                    <p>{element.title}</p>
                    <p>{element.category}</p>
                    <p>{element.amount}</p>
                </div>)
            })
        }
        total : {prop.totalAmount}
    </div>
);
}

export default ExpenseTable;
