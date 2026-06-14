import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import searchIcon from '../assets/search_icon.png'
import profileIcon from '../assets/profile_icon.png'
import cartIcon from '../assets/cart_icon.png'
import menuIcon from '../assets/menu_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {

        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});

    }

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={logo} alt="logo" className='w-36' /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink className='flex flex-col items-center gap-1' to='/'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center gap-1' to='/collection'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center gap-1' to='/about'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center gap-1' to='/contact'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>


            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={searchIcon} alt="" className='w-5 cursor-pointer' />
                <div className=' group relative'>

                    <img onClick={() => token ? null : navigate('/login')} src={profileIcon} alt="" className='w-5 cursor-pointer' />
                    {/* DropDown Menu */}

                    {token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Account</p>
                                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>

                            </div>
                        </div>
                    }
                </div>
                <Link to='/cart' className='relative'>
                    <img src={cartIcon} alt="" className='w-5 cursor-pointer' />
                    <p className='absolute right-[-5px] bottom-[-5] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={menuIcon} alt="" className='w-5 cursor-pointer sm:hidden' />
            </div>
            {/* Sidebar Menu For Small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600 '>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img src={menuIcon} alt="" className='h-4 rotate-180' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
