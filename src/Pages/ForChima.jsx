import Masonry from 'masonry-layout';
import React, { useEffect } from 'react'
import Carousel3D from '../3DCarousel/Carousel3D';

function ForChima() {

    useEffect(() => {



        var msnry = new Masonry('.grid', {
            itemSelector: '.grid-item',
            horizontalOrder: true,
            fitWidth: true,
        });
    }, [])



    return (
        <div className=' h-screen  bg-black relative w-screen overflow-y-scroll overflow-hidden'>
            <nav className='w-full absolute top-0 left-0  h-12 bg-opacity-0 hover:bg-opacity-100 trans-slow bg-red-500'>

            </nav>
            <h1 className=' text-cneter font-extrabold text-6xl lg:text-9xl'>TRIBAL ART</h1>
            <Carous>

            <div className="grid  m-auto items-center ">
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-white h-[30rem] w-[98%] md:w-[20rem] lg:w-[25rem] grid-sizer  grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-red-900 h-[50rem] w-[98%] md:w-[20rem] lg:w-[25rem] grid-sizer  grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-black h-96 w-full md:w-[20rem] lg:w-[25rem] grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-green-500 h-96 md:w-[20rem] lg:w-[25rem] grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-red-300 h-96 md:w-[20rem] lg:w-[25rem] grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-stone-800 h-[50rem] w-[98%] md:w-[20rem] lg:w-[25rem] grid-sizer  grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-white h-[30rem] w-[98%] md:w-[20rem] lg:w-[25rem] grid-sizer  grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-black h-96 w-full md:w-[20rem] lg:w-[25rem] grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-white h-[50rem] w-[98%] md:w-[20rem] lg:w-[25rem] grid-sizer  grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-green-500 h-96 md:w-[20rem] lg:w-[25rem] grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-red-300 h-96 md:w-[20rem] lg:w-[25rem] grid-item'></div>
                <div className='my-4 m-auto md:mx-3 lg:mx-4 xl:mx-5 border-2  bg-white h-[50rem] w-[98%] md:w-[20rem] lg:w-[25rem] grid-sizer  grid-item'></div>

            </div>


















        </div>
    )
}

export default ForChima