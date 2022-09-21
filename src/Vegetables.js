import React,{useState,useEffect} from 'react'
import './products.css';


const Vegetables=()=>{
    const [vegs,setVegs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        vegetableData()
    }, [])

    const vegetableData=()=>{
        fetch('http://localhost:5000/products/vegetables')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setVegs(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }

   if(!loading){
        return <div>Loading ...</div>;
    }
    return (
        <div className="vegetables">
                <h3 className='name'>VEGETABLES</h3>
            <ul >
            {vegs.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
        </div>
    )
}

export default Vegetables