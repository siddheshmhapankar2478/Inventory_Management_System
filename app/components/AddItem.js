'use client'
import React from 'react'
import { useState } from 'react';

const AddItem = ({addProduct}) => {
    const [disableBtn, setDisableBtn] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisableBtn(true);
        const prod={id:Date.now(), "productName":productName,"quantity":quantity,"price":price};
        setProductName('');
        setQuantity('');
        setPrice('');
        await addProduct(prod);
        setDisableBtn(false);
      };
    
  return (
    <div className="flex flex-col pt-2 pb-4 bg-[#333333] text-white">
      <div className="w-1/2 mx-auto flex flex-col pt-1 sm:w-3/4 md:w-3/4">
          <form className="w-full mx-auto flex flex-col items-center " onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold mb-1">Add Product</h1>
            <hr className='w-full h-[2px] bg-slate-400 mb-4'></hr>
            <div className="flex mb-2">
              <input type="text"
                id="productName"
                className="w-full px-3 py-2 border rounded-lg !outline-none text-black"
                value={productName}
                placeholder='Enter Product Name'
                onChange={(e) => setProductName(e.target.value)} required />
            </div>
            <div className="flex mb-2">
              <input type="number"
                id="quantity"
                min={0} 
                className="w-full px-3 py-2 border rounded-lg !outline-none text-black"
                value={quantity}
                placeholder='Enter Product Quantity'
                onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            <div className="flex mb-4">
              <input
                type="number"
                id="price"
                min={1} 
                className="w-full px-3 py-2 border rounded-lg !outline-none text-black"
                value={price}
                placeholder='Enter Product Price'
                onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="flex justify-center w-full">
              <button type="submit" disabled={disableBtn}
                className="bg-[#1CB852]  text-white font-bold px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:shadow-md disabled:bg-[#AAD49C]">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddItem