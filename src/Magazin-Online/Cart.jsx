import React from 'react'
import { Conte } from '../Context/Context'
import { FaCartPlus } from "react-icons/fa";
import { useContext } from 'react';
const Cart = () => {
  const {cart, setCart} = useContext(Conte);

  const changeQnt = (id, type) => {
    setCart(cart.map(obj => {
      if (obj.id === id) {
        if (type === "minus" && obj.quantity > 1) {
          return {...obj, quantity: obj.quantity - 1}
        } else if (type === "plus") {
          return {...obj, quantity: obj.quantity + 1}
        } else {
          return obj
        }
      } else {
        return obj
      }
    }))
  }

  const deleteProduct = (id) => {
    setCart(cart.filter(obj => obj.id !== id))
  }

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <>
            <div className="flex justify-between py-3 items-center">
              <h1 className="text-2xl font-semibold">Cart</h1>
              <div onClick={() => setCart([])} className="flex gap-2 items-center">
                <p className="underline">Elimina Produs</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 flex flex-col gap-3">
              {
                cart.map(obj => (
                  <div className="cart_product bg-slate-200 border border-slate-300 grid p-2 rounded justify-items-center items-center" key={obj.id}>
                    <img className="h-28 rounded-md" src={obj.image} alt="Product image" />
                    <h1 className="font-semibold text-lg">{obj.brand} {obj.id}</h1>
                    <p>{
                      obj.quantity > 1 ?
                      `${obj.quantity} x ${obj.price} MDL = ${obj.quantity * obj.price} MDL` :
                      `${obj.price} MDL`
                    }</p>
                    <div className="flex gap-2 items-center justify-center">
                      <button onClick={() => changeQnt(obj.id, "minus")} className={`h-10 w-10 text-xl bg-red-500 text-white rounded-full border-2 border-red-600 ${obj.quantity <= 1 ? "hidden" : ""}`}>-</button>
                      <h2 className="text-2xl font-semibold">{obj.quantity}</h2>
                      <button onClick={() => changeQnt(obj.id, "plus")} className="h-10 w-10 text-xl bg-green-500 text-white rounded-full border-2 border-green-600">+</button>
                    </div>
                    <div>
                      <button onClick={() => deleteProduct(obj.id)} className="text-xl text-white rounded-full bg-gradient-to-r from-red-600 to-red-800 px-3 py-2 flex gap-2 items-center justify-center">Delete <FaCartPlus /></button>
                    </div>
                  </div>
                ))
              }
              </div>
              <div className="bg-slate-200 border border-slate-300 rounded p-2 flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">Total</h1>
                <div className="flex flex-col gap-2">
                {
                  cart.map(obj => (
                    <div className="flex justify-between items-center" key={obj.id}>
                      <h1 className="text-lg font-medium">{obj.id}</h1>
                      <h2 className='text-lg font-semibold'>{obj.add}</h2>
                      <p className="text-lg">{obj.quantity} x {obj.price} MDL = {obj.quantity * obj.price} MDL</p>
                    </div>
                  ))
                }
                </div>
                <h1 className="text-xl font-semibold py-2 border-t border-gray-500">
                  {
                    cart.reduce((sum, obj) => sum + (obj.quantity * obj.price), 0)
                  }
                  MDL
                </h1>
              </div>
            </div>
          </>
        )
        :
        (
          <div className="flex items-center justify-center h-full w-full flex-col">
            <h1 className="text-xl font-semibold">Empty cart</h1>
            <img className="h-64" src="https://i.giphy.com/media/OSuaE6AknuRc7syZXp/giphy.webp" alt="GIF" />
          </div>
        )
      }
    </div>
  )
}

export default Cart