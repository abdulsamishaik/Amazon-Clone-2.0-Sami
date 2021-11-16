import Image from "next/image";
import {MenuIcon,SearchIcon,ShoppingCartIcon,} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

 function Header() {
     const [session] = useSession();
     const router = useRouter();
     const items = useSelector(selectItems);
    return (
        <header>
        {/* Top Nav */}
        <div className="flex item-center bg-amazon_blue flex-grow py-1">
            <div className="flex item-center mt-1 flex-grow sm:flex-grow-0">
                <Image onClick={ () => router.push('/')}
                 src="https://links.papareact.com/f90" 
                    width={150}
                    height={30}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            {/* Search Bar */}
            <div className="hidden sm:flex cursor-pointer items-center flex-grow mt-0.5 h-9 rounded-md bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-2 flex-grow rounded-l-md flex-shrink px-4 focus:outline-none" type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>

            

            {/* Right of Top Nav */}
            <div className="text-white flex  text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ?signIn : signOut} className="link">
                    <p>
                        {session ?  `Hello , ${session.user.name}` :'Sign-in'}
                    </p>
                    <p className="font-bold md:text-sm">Account & Lists</p>
                </div>

                <div onClick={()=> router.push("/orders")} className="link">
                <p>Returns</p>
                <p className="font-bold md:text-sm">& Orders</p>
                </div>

                <div onClick={ () => router.push('/checkout')}
                className="relative link flex items-center">
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 text-center bg-yellow-400 rounded-full font-bold text-black '>
                    {items.length}
                    </span>
                    <ShoppingCartIcon className="h-10" />
                    <p className="hidden md:inline mt-2 font-bold md:text-sm">Basket</p>
                </div>
            </div>

            </div>

            {/* Bottom Nav */}
            <div className='bg-amazon_blue-light flex items-center space-x-4 p-0.5  pl-6 text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />All
                </p>
                <p className="link ">Prime Video</p>
                <p className="link ">Amazon Business</p>
                <p className="link ">Today's Deal</p>
                <p className="link hidden lg:inline-flex">Electrnics</p>
                <p className="link hidden lg:inline-flex">Food & Grocerey</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>       
        </header>
    )
}


 export default Header


