'use client'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import AddItem from '@/app/components/AddItem';
import DisplayItem from '@/app/components/DisplayItem';
import DisplayStats from '@/app/components/DisplayStats';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [allProductList, setAllProductList] = useState([]);
  const [loadShimmer, setLoadShimmer] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoadShimmer(true);
      const response = await fetch("/api/add");
      const rjson = await response.json();
      setAllProductList(rjson?.allProducts);
      setLoadShimmer(false);
    } catch (error) {
      showToast(error, 'error');
    }
  };
 
  const addProduct = async (newProduct) => {
    setAllProductList((prevProducts) => [...prevProducts, newProduct]);
    try {
      const response = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        const errorMessage='Error adding product'
        showToast(errorMessage, 'error');
        throw new Error('Error adding product');
      }
      // const responseData = await response.json();

      showToast('Added product', 'success');
    } catch (error) {
      showToast(error, 'error');
    }
  };

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

  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AddItem addProduct={addProduct} />
      <DisplayStats products={allProductList} />
      <DisplayItem products={allProductList} fetchProduct={fetchProduct} loadShimmer={loadShimmer}/>
      <Footer/>
    </div>
  );
}
