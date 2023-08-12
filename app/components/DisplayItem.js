import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Shimmer from './Shimmer';
import NoProductsFound from './NoProductsFound';

const DisplayItem = ({ products, fetchProduct,loadShimmer}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchText, setSearchText] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);
  const showToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  

  const buttonAction = async (action, id, productName, initialQuantity) => {
    const index = products.findIndex((item) => item.productName === productName);
    const newProducts = [...products];
    if (action === 'increase') 
      newProducts[index].quantity = parseInt(initialQuantity) + 1;
    else 
      newProducts[index].quantity = parseInt(initialQuantity) - 1;
    setFilteredProducts(newProducts);
    setDisableBtn(true);

    try {
      const response = await fetch('/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, id, productName, initialQuantity }),
      });

      const responseBody = await response.json();
      await fetchProduct();
      setDisableBtn(false);

      const message='Updated product value successfully';
        showToast(message, 'success');

    } catch (error) {
      showToast(error, 'error');
    }
  };

  const deleteProduct = async (id) => {
    const indexToDelete = products.findIndex((item) => item.id === id);
    const newProducts = products.filter((item) => item.id !== id);
    setFilteredProducts(newProducts);
    setDisableBtn(true);

    try {
      await fetch(`/api/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      await fetchProduct();
      setDisableBtn(false);

      const message='Deleted product successfully';
      showToast(message, 'success');
    } 
    catch (error) {
      showToast(error, 'error');
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
    if (searchText.trim() === '') 
      setFilteredProducts(products);
    else {
      const filtered = products.filter(
        (product) =>
          product.productName.toLowerCase().includes(searchText.toLowerCase()) ||
          product.quantity.toString().includes(searchText) ||
          product.price.toString().includes(searchText)
      );
      setFilteredProducts(filtered);
    }
  }, [searchText, products]);

  return (
  <div className='bg-[#333333] text-white'>
    <div className="flex flex-col items-center w-3/5 mx-auto sm:w-3/4 md:w-3/4 xs:w-3/4">
            <h1 className="text-2xl font-semibold mb-1">Inventory Items</h1>
            <hr className='w-full h-[2px] bg-slate-400 mb-4'></hr>
        <div className=" flex mx-auto w-full mb-4 bg-white rounded-md shadow-sm border border-slate-400 ">
          <span className='px-2 pt-3 text-black'><SearchIcon></SearchIcon></span>
          <input
            className=" w-full h-12 py-2 mr-1 focus:outline-0 text-black"
            placeholder="Search a product or quantity or price"
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
      </div>
      {
      (loadShimmer)?(<Shimmer/>):
    ((filteredProducts?.length==0)?(<NoProductsFound />):(
      <table className=" w-full border-collapse border border-gray-300 mb-10 xs:w-2/5">
        <thead>
          <tr className="bg-[#36454F]">
            <th className="py-2 px-4 border xs:px-2">Product Name</th>
            <th className="py-2 px-4 border xs:px-2">Quantity</th>
            <th className="py-2 px-4 border xs:px-2">Price</th>
            <th className="py-2 px-4 border xs:px-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.map((product) => (
            <tr key={product?.id} className="border">
              <td className="py-2 px-4 font-semibold text-center xs:px-1">{product?.productName}</td>
              <td className="py-2 px-4 border text-center xs:px-1">
              <div className='flex mx-auto w-fit'>
                  <button className='border font-bold bg-[#1CB852]  text-white p-1 border-black  hover:shadow-md disabled:bg-[#AAD49C] rounded-sm xs:p-0 xs:ml-1' onClick={()=>buttonAction("decrease",product?.id,product?.productName,product?.quantity)} disabled={disableBtn||product.quantity==0}><RemoveIcon></RemoveIcon></button>
                  <p className='py-2 w-14 font-bold text-base xs:w-10'>{product?.quantity}</p>
                  <button className='border font-bold bg-[#1CB852]  text-white p-1 border-black  hover:shadow-md disabled:bg-[#AAD49C] rounded-sm xs:p-0 xs:mr-1' onClick={()=>buttonAction("increase",product?.id,product?.productName,product?.quantity)} disabled={disableBtn}><AddIcon></AddIcon></button>
              </div>
              </td>
              <td className="py-2 px-4 font-semibold text-center xs:px-1">{product?.price}</td>
              <td className="py-2 px-4 border text-center xs:px-1">
                <button className='bg-[#1CB852]  text-white font-bold px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:shadow-md disabled:bg-[#AAD49C] xs:p-2 xs:m-1' onClick={() => deleteProduct(product?.id)} disabled={disableBtn}> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>))
      }
    </div>
    </div>
  );
};

export default DisplayItem;
















