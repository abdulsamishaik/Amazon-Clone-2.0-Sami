import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket , removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({id,title,price,description,category,image,rating,hasPrime}){

    const dispatch = useDispatch();

    const addItemToBasket = () =>{
        const product = {
          id,title,price,description,category,image,hasPrime,rating
        };
        dispatch(addToBasket(product));
     }

     const removeItemFromBasket = () => {
         dispatch(removeFromBasket({id}));
     };


    return (
        <div className='grid-cols-5 grid hover:scale-110 transform transition duration-500'>
            <Image src={image} height={200} width={200} objectFit='contain' />

            {/* Middle Section */}
            <div>
                <p>{title}</p>

                <div className='flex'>
                 {Array(rating).fill().map((_,i)=><StarIcon className='h-5 text-yellow-500' />)}
                </div>

                <p className='text-xs my-2 line-clamp-3'> {description} </p>
                <Currency quantity={price} currency='INR'/>

                {hasPrime && (
                    <div className='flex items-center space-x-2 -mt-5'>
                   <img className='w-12' src="https://links.papareact.com/fdw" alt="" loading='lazy' />
                   <p className='text-xs text-gray-500'>Free Delivery</p>
               </div>
                )}
            </div>  

            {/* Right Side */}
            <div className='flex-col flex space-y-2 my-auto justify-self-end'>
            <button className='button mt-auto' onClick={addItemToBasket}>Add To Basket</button>
            <button className='button mt-auto' onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
