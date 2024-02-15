import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputControl from './InputControl';

const AddForm = ({setExpense,expense}) => {

    const [formData, setFormData] = useState({ title: '', category: '', amount: '' });
    const [trimmedFormData, setTrimmedFormData] = useState({  title: '', category: '', amount: '' });
    const [error, setError] = useState({});

    const validateError = (expeseData) => {
        const { title, category, amount } = expeseData;
        const errorData = {};
        if (!title) {
            errorData.title = "* Title is required"
        }
        if (!category) {
            errorData.category = "* Category is required"
        }
        if (!amount) {
            errorData.amount = "* Amount is required"
        }
        setError(errorData);
    }


    function submitHandler(e) {
    e.preventDefault();

    if (Object.keys(error).length !== 0) return;

    const newExpense = [...expense, trimmedFormData];
    localStorage.setItem('expense', JSON.stringify(newExpense));

    setExpense(JSON.parse(localStorage.getItem('expense')));

    setFormData({ title: '', category: '', amount: '' }); //reset
}

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setTrimmedFormData({
            id:uuidv4(),
            title:formData.title.trim(),
            category:formData.category.trim(),
            amount:parseInt(formData.amount),
        });

        validateError(trimmedFormData);

    };


    return (
        <div className='min-w-[300px] max-w-[600px] max-h-[500px] 
        flex flex-col items-center
        mt-7 mx-auto p-2'>
            <form onSubmit={submitHandler} className="w-[100%] p-5">
                <InputControl
                    label={"Title"}
                    name={"title"}
                    type={"text"}
                    onChange={handleInputChange}
                    id={"title"}
                    value={formData.title}
                    placeholder={"Enter Your Expense name"}
                    error={error.title} />

                <InputControl
                    label={"Category"}
                    name={"category"}
                    type={"text"}
                    onChange={handleInputChange}
                    id={"category"}
                    value={formData.category}
                    placeholder={"Enter Your Expense Category"}
                    error={error.category} />

                <InputControl
                    label={"Amount"}
                    name={"amount"}
                    type={"number"}
                    onChange={handleInputChange}
                    id={"amount"}
                    value={formData.amount}
                    placeholder={"Enter Expense Amount"}
                    error={error.amount} />

                <button type="submit" className="bg-green-300 mt-4 p-2 w-[100px] rounded-lg font-bold text-green-800">ADD</button>
            </form>

        </div>

    );
}

export default AddForm;
