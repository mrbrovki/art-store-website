import React, {FC} from 'react';
import Image from 'next/image';



const Cart:FC = () => {
 return (
  <>
   <div>
    <Image src='/assets/cart-icon.svg' width={24} height={24} alt='cart'/>
   </div>
  </>
 );
};
 
export default Cart;