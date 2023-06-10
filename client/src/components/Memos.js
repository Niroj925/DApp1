import React,{useState,useEffect} from 'react'

function Memos({state}) {

    const [memos,setMemos]=useState([]);

    const {contract}=state;

    useEffect(()=>{
        const memoMessage=async()=>{
            const memos=await contract.getMemos();
            // console.log(memos);
            setMemos(memos);
        }
        contract && memoMessage();
    },[contract])

  return (
    <div>
    {memos.map((memo) => {
      return (
        <div
          key={memo.timestamp}
          style={{
            backgroundColor: '#f2f2f2',
            padding: '5px',
            margin: '10px',
          }}
        >
          <div 
          style={{ 
            display: 'flex',
             flexDirection: 'column', 
            }}
          >
            <p>{memo.name}</p>
            <p>{memo.message}</p>
            <p>{new Date(memo.timestamp * 1000).toLocaleString()}</p>
            <p>{memo.from}</p>
          </div>
        </div>
      );
    })}
  </div>
  
  )
}

export default Memos