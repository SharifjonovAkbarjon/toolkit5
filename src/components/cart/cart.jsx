import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const cartList = cart.map((el) => (
<div className="bg-white container mx-auto shadow-md rounded-[10px] py-8 px-8 relative items-center justify-center  text-center" key={el.id}>
 
  <div className="w-full h-[200px] rounded-t-xl ">
    <img
      src="https://yt3.googleusercontent.com/ytc/AIdro_ksPhIMI0WR5XVXpuRZwzFaPQ5DQhfTX2sCE4e8EhhY2mk=s900-c-k-c0x00ffffff-no-rj"
      alt="User profile"
      className="w-full h-full object-contain"
    />
  </div>


  <div className="flex flex-col gap-2 mt-4">
    <p className="text-2xl font-bold"> {el.username}</p>
    <p className="text-lg font-[500]">{el.lname}</p>
    <p className="text-md ">{el.phone}</p>
  </div>

  <button
    onClick={() => dispatch(remove({ id: el.id }))}
    className="w-full mt-4 bg-red-700 text-white py-2 rounded-md"
  >
    Delete
  </button>
</div>

  ));

  return (
    <div className="container mx-auto mt-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {cartList}
      </div>
    </div>
  );
};

export default Cart;
