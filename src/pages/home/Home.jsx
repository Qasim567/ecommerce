import React from 'react'
import Layout from '../../components/layout/Layout'
import Image from '../../components/image/Image'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

export default function Home() {

  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }

  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div>
      <Image/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}
