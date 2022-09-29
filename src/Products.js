import React,{useState,useEffect} from 'react'
import './products.css';


const Products=()=>{
    const [products,setproducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        productsData()
    }, [])

    const productsData=()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setproducts(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }

   if(!loading){
        return <div>Loading ...</div>;
    }
    return ( 
        <div className='pro'>
            <h2 className='title'>WELCOME TO GREENS KIOSK</h2>
             <p className='title'>Various Fruits and Vegetables</p>
        
        <div className="products">
             
            <ul >
            {products.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
        </div>
        </div>
    )
}

export default Products