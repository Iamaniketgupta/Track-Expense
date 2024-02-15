import { useEffect, useState } from "react";

const ExpenseTable = (props) => {
    let expenseData = props.expense;

    const uniqueCategories = Array.from(new Set(expenseData.map(expense => expense.category)));
    const [filterdata, setFilterData] = useState(expenseData);

    const filterByCategory = (e) => {
        const selectedOption = e.target.value

        const filteredCategory = selectedOption ? expenseData.filter((elem) => elem.category === selectedOption) : expenseData;
        setFilterData(filteredCategory);
    }

    useEffect(() => {
        let total = 0;
        filterdata.forEach((element) => {
            total += parseInt(element.amount);
        });
        props.setTotalAmount(total);
    }, [filterdata]);



    return (
        <div className="flex overflow-x-hidden">
            <table className="w-full p-3">
                <thead className="bg-gray-50">
                    <tr>
                        <th className=" py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th className=" py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <select name="filterCategory" onChange={filterByCategory} >
                                <option hidden>Category</option>
                                <option value={''} default>All</option>
                                {
                                    uniqueCategories.map((elem,idx) =>
                                    <option key={idx} value={elem} title={elem}>{elem}</option>
                                    )
                                }
                            </select>
                        </th>
                        <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filterdata.map((element) => (
                        <tr key={element.id} className="bg-white">
                            <td className="text-center py-4 text-sm text-gray-900">{element.title}</td>
                            <td className="text-center py-4  text-sm text-gray-900">{element.category}</td>
                            <td className="text-center py-4  text-sm text-gray-900">{element.amount}</td>
                        </tr>
                    ))}
                    <tr className="bg-gray-50">
                        <td colSpan="2" className="text-left px-6 py-4 text-sm font-medium text-gray-900">
                            Total
                        </td>
                        <td className=" py-4  text-sm text-gray-900">{props.totalAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

export default ExpenseTable;
