import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ForDani from './ForDani'
import ForChima from './forchima'
import HERO from '../../public/images/HERO.png'
import { IoClose, IoInformation } from 'react-icons/io5'

function PortolioItem({ item }) {
    return (
        <div className='center-col group  font2'>
            <div className='group-hover:opacity-100 lg:opacity-0 mb-2 trans-slow'>
                <Button className='w-32 bg-black' >
                    <a className='font-bold text-white  w-full' href={item.imgURL} target="_blank" rel="noopener noreferrer">
                        Go to full site
                    </a>
                </Button>
            </div>
            <div className='h-64 w-64 border-2 border-black overflow-hidden rounded bg-gray-100 col-span-1 m-auto'>
                <div className='bg-black h-full'>

                    <iframe className='h-full w-full hidescroll ' src={item.imgURL} ></iframe>
                </div>

            </div>
            <h1 className='font-extrabold my-3 text-lg'>
                {item.name}
            </h1>
            <div className=' h-24 gap-4 lg:w-3/4 text-xs flex justify-center items-center overflow-hidden '>
                <div className='w-1/2 h-full   px-1'>
                    <div className='font-bold text-right'>Description</div>

                    <h1 className='text-right'>
                        {item.about}

                    </h1>
                </div>
                <div className='w-1/2 h-24 '>
                    <div className='font-bold text-blue-700'>Tech</div>
                    <ul className='flex justify-center flex-col '>
                        {item.tech.map((item) => {
                            return (
                                <li className=' list-disc list-inside'>{item}</li>
                            )
                        })}
                    </ul>


                </div>

            </div>
        </div>
    )
}


class FeaturedItem {

    constructor(name, imgURL, tech, about) {
        this.name = name
        this.imgURL = imgURL
        this.tech = tech
        this.about = about
    }
}


function ForPort() {
    const [exp, setExp] = useState(false)
    const toggleEXP = () => setExp(!exp)
    const [showAbout, setShowAbout] = useState(false)
    const [showAllLinks, setShowAllLinks] = useState(false)
    const toggleAllLinks = () => setShowAllLinks(!showAllLinks)

    const featuredItems = [
        new FeaturedItem('VoidApps', 'https://voidappx.netlify.app/', ['React', 'Stripe', 'FireBase', 'TailWind'], 'My personal website with my services'),
        new FeaturedItem('Digits', 'https://iinvesta.vercel.app/', ['Unit Bank API', 'Firebase', 'Tailwind', 'NextJX/React-Native'], 'Social Media Banking App'),
        new FeaturedItem('AfroSmoke', 'https://afrosmoke.vercel.app/', ['React', 'Stripe', 'MongoDB', 'TailWind'], 'E-commerce Store'),
    ]

    const otherItems = [
        new FeaturedItem('GitHub', 'https://github.com/chigoox/', 'All my codes'),
        new FeaturedItem('Itch.Io', 'https://chigoox.itch.io/', 'Games developed with Ruby/C#'),
        new FeaturedItem('All Sites', 'https://chigoox.itch.io/', 'All Website/Apps'),
        new FeaturedItem('Experimental', '', 'Currently working on.'),
    ]

    const allLinksEcommerce = [
        new FeaturedItem('ViHair', 'https://vihair.vercel.app/',),
        new FeaturedItem("Shop by 5 O' Clock", 'https://shopby5oclock.vercel.app/',),
        new FeaturedItem('HumainGrandeur', 'https://humainegrandeur.netlify.app/',),
    ]

    const allLinksBookings = [
        new FeaturedItem('The Hub', 'https://hubbook.vercel.app/',),
    ]

    const otherLinks = [
        new FeaturedItem('Void Card', 'https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13/',),
        new FeaturedItem('Mech Cash', 'https://mecshop.netlify.app/',),
    ]




    return (
        <div className='h-screen hidescroll relative overflow-y-scroll'>
            <Button onPress={() => { setShowAbout(!showAbout) }} className='fixed z-[99] p-0 min-w-0 w-12 h-12 rounded-full bottom-8 lg:bottom-4 right-4'><IoInformation /></Button>
            {showAbout && <div className="fixed center h-3/4 rounded-t-xl w-full z-50 -bottom-1 bg-black">

                <div className='h-[26rem]  w-52 overflow-hidden   mb-2'>
                    <div className='h-40 w-52 bg-white z-10 relative overflow-hidden'>
                        <img className='object-cover h-full w-full relative scale-110' src={HERO} alt="" />
                    </div>
                    <div className='h-40 w-52 p-2 bg-red-500 z-10 relative overflow-hidden'>
                        <h1 className='hover:scale-10 text-center hover:first-letter:bg-rose-500 trans-slow text-sm md:text-normal first-letter:text-4xl'>
                            A highly skilled and motivated
                            full-stack developer.
                        </h1>
                        <h1 className='text-xs text-center'>
                            "If you can Imagine it. I can build it!"
                        </h1>
                    </div>
                    <div className='relative bottom-32 rotate-[10deg] h-48 right- w-64 bg-red-500'></div>
                </div>
            </div>}

            {showAllLinks && <div className='h-auto  z-[99] w-screen bg-black  absolute  top-[30%] center'>
                <div className=' max-h-screen min-h-32 h-auto p-8 w-screen bg-black'>
                    <Button className='w-full bg-black text-white' onPress={() => { toggleAllLinks() }}><IoClose size={32} /></Button>
                    <div className='flex flex-col md:flex-row items-center justify-center  overflow-hidden gap-2 w-full'>
                        <div className='border w-64 p-2 flex-shrink-0'>
                            <h1 className='text-white text-center'>E-commerce</h1>
                            {allLinksEcommerce.map((item) => {
                                return (
                                    <li className=' list-inside list-disc text-white mt-2'>
                                        <a className='text-white' href={item?.link} target="_blank" rel="noopener noreferrer">{item?.name}</a>
                                    </li>
                                )
                            })}
                        </div>

                        <div className='border w-64 p-2 flex-shrink-0'>
                            <h1 className='text-white text-center'>Booking</h1>
                            {allLinksBookings.map((item) => {
                                return (
                                    <li className=' list-inside list-disc text-white mt-2'>
                                        <a className='text-white' href={item?.link} target="_blank" rel="noopener noreferrer">{item?.name}</a>
                                    </li>
                                )
                            })}
                        </div>

                        <div className='border w-64 p-2 flex-shrink-0'>
                            <h1 className='text-white text-center'>Other</h1>
                            {otherLinks.map((item) => {
                                return (
                                    <li className=' list-inside list-disc text-white mt-2'>
                                        <a className='text-white h-full w-full' href={item?.imgURL} target="_blank" rel="noopener noreferrer">{item?.name}</a>
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>}





            {!exp && <div>
                <h1 className="mt-20 text-2xl font-extrabold font1  text-center">Portoflio</h1>
                <div className='md:w-3/4 m-auto  mt-4   h-auto w-full'>
                    <motion.div
                        initial={{
                            scale: '0%',
                            opacity: '0%'
                        }}
                        transition={{ duration: 1, delay: 1 }}
                        animate={{
                            scale: '100%',
                            opacity: '100%'
                        }}
                        className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-auto gap-2 border-black'>
                        {featuredItems.map((freaturedItem_, index) => {
                            return (<PortolioItem key={index} item={{ ...freaturedItem_ }} />)
                        })}
                    </motion.div>
                </div>
            </div>}

            <motion.div

                initial={{
                    opacity: '0%'
                }}
                transition={{ duration: 1, delay: 2 }}
                animate={{

                    opacity: '100%'
                }}

                className='p-2 md:p-8 mt-8'>

                <div className='grid grid-cols-4 gap-2 '>
                    {otherItems.map((item, index) => {
                        return (
                            <div key={index} className=' col-span-1 center-col'>
                                <Button onPress={item.name == 'Experimental' ? () => { toggleEXP() } : item.name == 'All Sites' ? () => { toggleAllLinks() } : () => { }} className='bg-black relative rounded-full w-3/4 h-12  m-auto overflow-hidden'>
                                    <div className='absolute h-full w-full center bg-black bg-opacity-75 top-0'>
                                        {item.name == 'Experimental' ?
                                            <div className={`font-bold ${exp ? 'text-red-700' : 'text-white'}  w-full`}>
                                                <h1 className=' font-bold   md:text-2xl'>{'Exp'}</h1>
                                                <h1 className='text-xs'> </h1>
                                            </div>

                                            :

                                            item.name == 'All Sites' ?
                                                <div className='font-bold text-white  w-full'>
                                                    <h1 className='text-white font-bold   md:text-2xl'>{item.name}</h1>
                                                    <h1 className='text-xs'> </h1>
                                                </div>

                                                :

                                                <a className='font-bold text-white  w-full' href={item.imgURL} target="_blank" rel="noopener noreferrer">
                                                    <h1 className='text-white font-bold md:text-2xl'>{item.name}</h1>
                                                    <h1 className='text-xs'> </h1>
                                                </a>}
                                    </div>

                                </Button>
                                <div className='hidden md:block'>
                                    {item.tech}
                                </div>
                            </div>
                        )
                    })}

                </div>

            </motion.div>

            <motion.div
                initial={{
                    opacity: '0%'
                }}
                transition={{ duration: 1 }}
                animate={{

                    opacity: '100%'
                }}
                className='relative top-0'>
                {exp && <ForDani />}
            </motion.div>

        </div>
    )
}

export default ForPort