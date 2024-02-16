
const ContextMenu = ({contextPosition,setContextPosition,expense,setExpense}) => {
    if(!contextPosition.X||!contextPosition.Y)
    return;

    //  delete feature
    function deleteHandler(){
        const ID =contextPosition.ID
        setExpense(()=> expense.filter((elem)=>elem.id !==ID ));
        setContextPosition({});
    }

    // edit feature

    function editHandler(){
        const ID =contextPosition.ID
        setExpense(()=> expense.filter((elem)=>elem.id !==ID ));
        setContextPosition({});
    }
    
    return (
        <div className={`w-[70px] h-fit py-3 min-w-fit font-semibold rounded-md bg-indigo-200 z-10`} style={{position:"absolute" ,top:`${contextPosition.Y +200}px`,left:`${contextPosition.X+20}px`}}>
            <div className='hover:bg-green-300 cursor-pointer px-2' onClick={()=>editHandler()}>Edit</div>
            <div className='hover:bg-green-300 cursor-pointer px-2' onClick={()=>deleteHandler()}>Delete</div>
        </div>
    );
}

export default ContextMenu;
