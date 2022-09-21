import React,{useState,useEffect} from 'react'
import './products.css';

const Fruits=()=>{
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
       fruitsData()
    }, [])

    const fruitsData=()=>{
        fetch('http://localhost:5000/products/fruits')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setData(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }

   if(!loading){
        return <div>Loading ...</div>;
    }
    return (
        
        <div className='fruits'>
            <h3 className='name'>FRUITS</h3>
            <ul>
            {data.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
        </div>
    )
}

export default Fruits