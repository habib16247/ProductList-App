import React, { useEffect, useState } from 'react'
import "./Product.css"
import Products from './Products'

const ProductList = () => {

    const getDataLocal = () => {
        const data = localStorage.getItem("Products")

        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }

    }


    const [title, setTitle] = useState("")
    const [productId, setProductId] = useState(Math.floor(Math.random() * 5000))
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState()
    const [colors, setColors] = useState("red")

    const [total, setTotal] =useState(getDataLocal())



    const addHandler = (e) => {
        e.preventDefault();
        
        if(!title || !productId || !price || !quantity || !description || !date) {
            return alert("Enter Product Details!!!!")
        }

        const productInfo = {
            title,
            date,
            productId: Math.floor(Math.random() * 5000),
            price,
            quantity,
            description,
            colors
        }

        setTotal([...total, productInfo])

        setTitle("");
        setPrice("");
        setQuantity("");
        setDescription("");
        setDate("")
        setColors("")
    }

    const deleteHandler = (id) => {
        const filterDelete = total.filter((item, index) =>{
            return item.productId !== id;
        })
        setTotal(filterDelete)
    }


    
    useEffect(() => {
        localStorage.setItem("Products", JSON.stringify(total))
    }, [total])

    const removeAll = () => {
        setTotal([])
    }


  return (
    <>
        <div className="container">
            <h1>Products List</h1>
            <div className="products-container">
            <form>
                <h2>Product Details</h2>
    <hr /> <hr />
                <label>Product Name:</label>
				<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" required></input>
				<br></br>

                <label>Price: </label>
				<input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control" required></input>
				<br></br>

                <label>Quantity: </label>
				<input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} className="form-control" required></input>
				<br></br>

                <label>Description: </label>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} rows="6" className="form-control" required></textarea>
				<br></br> <br />
                

                <label>Date: </label>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} className="form-control" required></input>
                <br></br>

                <label>Color:</label>
                <br />
				<select onChange={e => setColors(e.target.value)} value={colors} >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
				<br></br>
                <button onClick={addHandler} type='submit'>Submit</button>
            </form>
            <div className="item-info">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Color</th>
                    <th>Description</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        total.map((item) => <Products key = {item.productId} item={item} deleteHandler ={deleteHandler } />)
                    }
                </tbody>
            </table>
                    <div onClick={removeAll} className='remove'>
                        Remove All
                    </div>
             </div>
            </div>
        </div>
    </>
  )
}

export default ProductList
