import React from 'react'
import './Product.css'
import {useState, useEffect} from 'react'
import { FaStar } from "react-icons/fa";

const Product = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const fetchProducts = async() => {

        try{
            setIsLoading(true)

            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }catch(e){
            console.log(e)
        }finally{
            setIsLoading(false)
        }
      
    }

    useEffect(() => {
        fetchProducts()
    },[])

    if(isLoading){
        return(
            <div>Products are loading .....</div>
        )
    }
  return (
    <div className='products'>
        <h1>Product DashBoard</h1>
        <div className="product">
        {
            products.map((product,index) => {
                return (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt="" />
                            <span>{product.rating.rate} <FaStar className='icon' /> | {product.rating.count}</span>
                        </div>
                        <hr />
                        <div className="product-details">
                            <div>{product.title.substring(0,35)}...</div>
                            <div>Catgeory: {product.category}</div>
                            <div>Rs. {product.price}</div>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    
                )
            })
        }
        </div>
        
    </div>
  )
}

export default Product