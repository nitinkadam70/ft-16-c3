import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"




const GroceryDetails = () => {
    console.log(data) 
    return (
        <>
            <h1>Groceries</h1>
            <div className="container" >

                {/* map through the data and display the cards */}
                {data.map((item)=>(
                 
                 <GroceryItem title={item.title} discount={item.discount} imgURL={item.imgURL} 
                 mrp = {item.mrp} price ={item.sellingPrice}/>

                ))}


            </div>
        </>
    )
}
export default GroceryDetails