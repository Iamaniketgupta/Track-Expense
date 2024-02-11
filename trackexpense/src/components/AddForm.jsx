import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddForm = (prop) => {

    // const[title,setTitle] = useState('');
    // const[category,setCategory] = useState('');
    // const[amount,setAmount] = useState(0);
    const [formData, setFormData] = useState({ title: '', category: '', amount: '' });

    function submitHandler (e){
        e.preventDefault();
        prop.setExpense((prevState) => [...prevState, formData]);
        console.log(formData)
        setFormData({ title: '', category: '', amount: '' });
        // const data = getFormData(e.target);
        // data.id=uuidv4();
        // prop.setExpense((prevState)=>[...prevState,data])
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({id: uuidv4(), ...formData, [name]: value });
    };
    console.log(formData)

    // function getFormData(form){
    //    const formData = new FormData(form);
    //    const data= {};
    //    for (const [key,value] of formData.entries()){
    //          data[key] =value;
    //         }
    //    return data;
    // }

    return (
        <div className='min-w-[300px] max-w-[500px] max-h-[500px] 
        flex flex-col items-center
        mt-7 p-2'>
            <form onSubmit={submitHandler} className="w-[70%] p-5
                ">
            <div >
             <p>Title</p>
             <input type="text" name="title" onChange={handleInputChange} value={formData.title} 
             placeholder='Enter expense Title' required/>
            </div>
            <div>
             <p>Category</p>
             <input type="text" name="category" onChange={handleInputChange} value={formData.category} 
             placeholder='Enter Category Title' required/>
            </div>
            <div>
             <p>Amount</p>
             <input type="number" name="amount" onChange={handleInputChange} value={formData.amount} 
             placeholder='Enter Amount' required/>
            </div>
            <button type="submit" className="bg-purple-500 mt-4">ADD</button>
            </form>
            
        </div>

    );
}

export default AddForm;
