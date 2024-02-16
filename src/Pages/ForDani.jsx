import React, { useState } from 'react'
import ICON from '../../public/images/icon.png'
import BAG from '../../public/images/bag.png'
import { IoBag, IoBagHandle, IoClose, IoCloseCircle } from "react-icons/io5";
import { ImHome, ImMenu } from "react-icons/im";
import { motion } from "framer-motion"
import ProductView from '../Support/ProductView';
const MenuItem = ({ name, showMobileMenu }) => {
    return (
        <div className={` items-center gap-1 justify-center ${showMobileMenu ? 'flex' : 'hidden'} lg:block`}>
            {name == 'Home' && <ImHome size={24} className='block lg:hidden' />}
            {name == 'Shop' && <IoBag size={24} className='block lg:hidden' />}
            <h1 className='font-bold text-lg'>{name}</h1>
        </div>


    )
}

function ForDani() {
    const [showCart, setShowCart] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)
    const [showShopView, setShowShopView] = useState(false)
    const menu = ['Home', 'Shop']

    const mock = {
        price: 126,
        caption: 'this is the description',
        media: ['https://img.ltwebstatic.com/images3_pi/2021/09/13/16315032568193ac51c3403e29d4a0b00ad9cef0e9_wk_shein_thumbnail_900x.webp',
            'https://s3-eu-west-1.amazonaws.com/emap-nibiru-prod/wp-content/uploads/sites/2/2020/11/02173926/REISS_LUX_LEISURE_3648-1024x683.jpg',
            'https://img.ltwebstatic.com/images3_pi/2021/08/19/162936919953106120b021e87432cf0fd7cdb99e42.webp',

        ]
    }


    return (
        <div className='bg-white h-screen w-screen relative overflow-x-hidden'>

            <ProductView
                showShopView={showShopView}
                setShowShopView={setShowShopView}
            />
            <nav className='bg-black bg-opacity-25 h-10 lg:h-16 w-full fixed z-50 top-0 flex items-center justify-evenly p-2 '>

                <div className={`${showMobileMenu ? 'h-12 opacity-100 ' : 'h-[1px]  opacity-25'} text-white flex items-center justify-center gap-4 lg:hidden bg-black absolute w-full  top-10  trans`}>
                    {menu.map((item) => {
                        return (
                            <MenuItem key={item} name={item} showMobileMenu={showMobileMenu} />
                        )
                    })}
                </div>

                <div className={`absolute h-screen right-0 top-0 p-2 bg-gray-100 bg-opacity-[.95] ${showCart ? 'w-72  md:w-96 opacity-100' : 'w-0 opacity-0'} trans`}>
                    <button onClick={() => { setShowCart(false) }} className='absolute'>
                        <IoClose size={24} />
                    </button>
                    <h1 className='text-3xl font-bold text-center '>Cart</h1>
                    <div className=' flex justify-between items-center flex-col gap-2 overflow-y-scroll h-[90%] '>
                        {[1, 1, 1, 1].map(() => {
                            return (
                                <div className='h-auto w-52 flex-shrink-0 p-2 bg-gray-300 shadow-sm m-auto rounded-lg overflow-hidden'>
                                    <div className='flex justify-between items-center'>
                                        <div className='h-24 w-1/2 bg-black rounded-xl overflow-hidden'>
                                            <img className='h-full w-full' src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                        <div className='w-1/2 '>
                                            <h1 className='text-center font-bold'>NAME</h1>
                                            <h1 className='text-center font-light'>$127.99</h1>
                                        </div>

                                    </div>

                                    <div className=' h-auto mt-2'>
                                        <div className='flex m-auto  items-center'>
                                            <button className='w-6 rounded-l-full bg-black text-white p-1 border'>+</button>
                                            <input defaultValue={1} className='w-12 text-center  bg-black text-white p-1' type="number" />
                                            <button className='w-6 rounded-r-full bg-black text-white p-1 border'>-</button>
                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                    </div>
                    <div className='border-4 flex justify-center items-center'>
                        <button className='bg-black text-white font-bold h-12 w-3/4  relative rounded'>
                            Checkout
                        </button>
                    </div>
                </div>


                <h1 className='font1 text-white font-light text-4xl text-center hidden lg:block'>Opulence</h1>

                <div className=''>
                    <div className='flex justify-between lg:w-[15rem]'>
                        <button onClick={toggleMobileMenu}>

                            <ImMenu size={30} color='white' className='lg:hidden' />
                        </button>
                        <div className='lg:flex justify-between w-full hidden text-white'>
                            {menu.map((item) => {
                                return (
                                    <MenuItem key={item} name={item} />
                                )
                            })}
                        </div>

                    </div>

                </div>
                <h1 className='font1 text-white font-light text-2xl text-center lg:hidden block'>Opulence</h1>
                <button className='' onClick={() => { setShowCart(true) }}>
                    <IoBagHandle size={30} color='white' />
                </button>
            </nav>
            <div className='absolute h-screen w-screen hidden lg:block '>

                <div className='w-40 top-20 left-auto trans ml-4 xl:ml-40 relative'>
                    <h1 className='text-6xl font-extrabold '>Luxury</h1>
                    <h1 className='text-6xl font-bold '>Lounge</h1>
                    <h1 className='text-6xl font-bold '>Wear</h1>

                </div>

                <div className='xl:w-64 lg:w-48 trans top-20 left-auto ml-4 xl:ml-40 relative'>
                    <h1 className='text-3xl font-bold font1 ' >100% Premier line silk</h1>


                </div>


            </div>


            <div className='md:h-[40rem] w-full flex items-center justify-center rounded-b-full  overflow-hidden'>
                <img className='h-auto lg:h-[50rem]   object-cover' src="https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww" alt="" />

            </div>
            <div className='absolute top-56 w-full center'>
                <motion.div
                    initial={{
                        x: "100%",
                        opacity: '0%'
                    }}
                    animate={{
                        x: "0%",
                        opacity: '100%'
                    }}
                    className='grid grid-cols-12 md:w-3/4 xl:w-1/2 p-8 m-auto   overflow-hidden'>
                    {[

                        'https://images.unsplash.com/photo-1607892381203-0c54bd738575?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        'https://images.unsplash.com/photo-1627858266901-0429f55811d8?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
                        'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
                        ICON,
                        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
                        'https://images.unsplash.com/photo-1517583106829-61e14fcbddf5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D',
                        'https://images.unsplash.com/photo-1532675432006-329c6fed7045?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        'https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'




                    ].map((item, index) => {
                        if (item == '/public/images/icon.png' || item == '/public/images/icon.png?t=1707812753283')
                            return (
                                <div key={index} className='col-span-4 group relative h-auto flex items-center justify-center'>
                                    <div className='absolute  h-full w-full items-center justify-center flex'>
                                        <h1 className='font-light group-hover:w-full text-white bg-black w-3/4  text-center trans-slow'>Shop Now</h1>
                                    </div>
                                    <img className='object-cover  h-full w-full m-auto' src={item} alt="" />
                                </div>
                            )

                        return (
                            <div className={`
                        ${index == 0 ? 'rounded-tl-full' : ''}
                        ${index == 8 ? 'rounded-br-full' : ''}
                        ${index == 2 ? 'md:rounded-tr-xl' : ''}
                        ${index == 8 ? 'md:rounded-bl-xl' : ''}
                         overflow-hidden   col-span-4  h-auto  flex items-center justify-center`}>
                                <img className='w-full h-full object-cover trans-slow hover:scale-125 scale-100  aspect-square' src={item} alt="" />

                            </div>
                        )
                    })}



                </motion.div>
            </div>

            <div className=' xl:top-72 lg:top-[30rem]  relative'>
                <h1 className='mt-24 mb-10 text-5xl text-center text-black font-light  '> NEW Arrivals</h1>

                <motion.div
                    initial={{
                        x: "-100%",
                        opacity: '0%'
                    }}
                    animate={{
                        x: "0%",
                        opacity: '100%'
                    }}
                    className='grid grid-cols-4 relative '>

                    {[
                        "https://www.bbxbrand.com/cdn/shop/files/2833BLACKSLIM_a2a384b0-6dc3-4f12-87cb-2c01d4956c4c.png?v=1706145096",
                        'https://www.bbxbrand.com/cdn/shop/files/0083SLIM.png?v=1707756379',
                        'https://www.bbxbrand.com/cdn/shop/files/0238SLIM.png?v=1706143758',
                        'https://www.bbxbrand.com/cdn/shop/files/1358SLIM.png?v=1706181209'
                    ].map((item, index) => {
                        return (
                            <button onClick={() => {
                                setShowShopView({
                                    name: 'Luxury Lounge Wear',
                                    price: 176,
                                    caption: 'brand new luxury wear',
                                    media: mock.media
                                })
                            }} key={index} className=' group border-opacity-0 hover:border-opacity-100 rounded-lg relative  border-gray-700 trans flex items-center justify-center'>
                                <div className='shopicon'>
                                    <img className='object-cover h-72 lg:h-[35rem] ' src={item} alt="" />
                                </div>
                                <div className='absolute bottom-10 opacity-0 bg-opacity-75 group-hover:opacity-100 trans  py-2 w-3/4 rounded bg-black'>
                                    <h1 className='text-white text-2xl text-center'>$175</h1>
                                </div>
                            </button>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default ForDani