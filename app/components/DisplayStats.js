import React from 'react'
import { useState, useEffect } from 'react';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const DisplayStats = ({products}) => {
    const [totalProductQuantity, setTotalProductQuantity] = useState(0);
    const [totalStoreValue, setTotalStoreValue] = useState(0);
    const [outOfStockCount, setOutOfStockCount] = useState(0);
  
    useEffect(() => {
      const newTotalProductQuantity = products.reduce(
        (total, product) => total + parseInt(product.quantity, 10),
        0
      );
      setTotalProductQuantity(newTotalProductQuantity);
      const newTotalStoreValue = products.reduce(
        (total, product) =>
          total + parseInt(product.quantity, 10) * parseInt(product.price, 10),
        0
      );
      setTotalStoreValue(newTotalStoreValue);
      const newOutOfStockCount = products.filter(
        (product) => product.quantity == 0
      ).length;
      setOutOfStockCount(newOutOfStockCount);
    }, [products]);
  
  return (
    <div className="flex flex-col pb-4 bg-[#333333] text-white ">
      <div className="flex flex-col justify-between w-3/5 mx-auto sm:w-3/4 md:w-3/4">
            <h1 className="text-2xl font-semibold mb-1 text-center">Inventory Stats</h1>
            <hr className='w-full h-[2px] bg-slate-400 mb-4'></hr>
          
          <div className='flex w-full justify-between mx-auto sm:flex-col sm:w-full sm:items-center md:flex-col md:w-full md:items-center xs:flex-col xs:w-full xs:items-center'>
            <div className='flex  w-44 bg-[#B626FF] m-2 sm:my-2 md:my-2 '>
              <div className='flex items-center  p-1'>
              <ShoppingCartIcon fontSize="large" />
              </div>
              <div className='flex flex-col pl-2'>
                <h1>Total Products</h1>
                <span className="font-bold">{totalProductQuantity}</span>
              </div>
            </div>

            <div className='flex  w-44 bg-[#32963E] m-2 sm:my-2 md:my-2 '>
              <div className='flex items-center  p-1'>
              <CurrencyRupeeIcon fontSize="large" />
              </div>
              <div className='flex flex-col pl-2'>
                <h1>Total Value</h1>
                <span className="font-bold">{totalStoreValue}</span>
              </div>
            </div>

            <div className='flex  w-44 bg-[#C41848] m-2 sm:my-2 md:my-2 '>
              <div className='flex items-center  p-1'>
              <RemoveShoppingCartIcon fontSize="large" />
              </div>
              <div className='flex flex-col pl-2'>
                <h1>Out Of Stock</h1>
                <span className="font-bold">{outOfStockCount}</span>
              </div>
            </div>
          </div>


      </div>
    </div>
  )
}

export default DisplayStats
