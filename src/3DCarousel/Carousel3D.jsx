import React, { useEffect, useState } from 'react'
import './3DCarousel.css'
import { createArray } from '../util/ED5';


function Carousel3D({ }) {
    const [selectedSlide, setSelectedSlide] = useState(0)
    const [stopcarousel, setStopcarousel] = useState(false)
    const [cells, setCells] = useState(8)
    console.log(cells)
    useEffect(() => {
        var carousel = document?.querySelector('.carousel');
        var cells = carousel.querySelectorAll('.carousel__cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex = 0;                                                                                                                   
        var cellWidth = carousel?.offsetWidth;
        var cellHeight = carousel?.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;
        // console.log( cellWidth, cellHeight );

        function rotateCarousel() {
            var angle = theta * selectedIndex * -1;
            carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
                rotateFn + '(' + angle + 'deg)';
        }

        var prevButton = document.querySelector('.previous-button');
        prevButton.addEventListener('click', function () {
            selectedIndex--;
            rotateCarousel();
        });

        var nextButton = document.querySelector('.next-button');
        nextButton.addEventListener('click', function () {
            selectedIndex++;
            rotateCarousel();
        });

        var cellsRange = document.querySelector('.cells-range');
        cellsRange.addEventListener('change', changeCarousel);
        cellsRange.addEventListener('input', changeCarousel);



        function changeCarousel() {
            cellCount = cellsRange.value;
            setSlideCount(cellsRange.value)
            theta = 360 / cellCount;
            var cellSize = isHorizontal ? cellWidth : cellHeight;
            radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                if (i < cellCount) {
                    // visible cell
                    cell.style.opacity = 1;
                    var cellAngle = theta * i;
                    cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
                } else {
                    // hidden cell
                    cell.style.opacity = 0;
                    cell.style.transform = 'none';
                }
            }

            rotateCarousel();

        }

        selectedIndex++;
        rotateCarousel();

        console.log('ran')


    }, [selectedSlide])




    const [slideCount, setSlideCount] = useState(0)
    const Slides = [
        'https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1706378398503-eeeeee0c1b16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1683009427666-340595e57e43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1706498133899-f1cf5a6af53e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1673567872063-ad00f02f7e2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1673288397715-12c2fbb9f52b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


    ]
    return (
        <div className='h-auto p-2 flex xl:flex-row flex-col items-center justify-center overflow-X-hidden'>


            <div onMouseOver={() => { setStopcarousel(true) }} onMouseLeave={() => { setStopcarousel(false); }} className="scene absolute z-[99999999]  mt-10">
                <p className=''>
                    <label >
                        Cells
                        <input className="cells-range" type="range" min="3" onChange={({ target }) => { setCells(target.value) }} value={cells} max="14" />
                    </label>
                </p>
                <div className="carousel ">
                    {createArray(14).map((item, index) => {
                        return (
                            <button className='carousel__cell p-0   rounded-3xl drop-shadow-lg   overflow-hidden relative' key={index}>
                                <div className=' opacity-0 hover:opacity-100 bg-black bg-opacity-25 flex flex-col items-center justify-center trans-slow absolute w-full h-full'>
                                    <div className='h-[80%] w-full p-2'>
                                        <div className='flex items-center gap-2 justify-center'>
                                            <div className='h-36 w-36 bg-white overflow-hidden drop-shadow-lg rounded-2xl'>
                                                <img className='h-full w-full object-cover' src={Slides[index]} alt="" />

                                            </div>
                                            <div className='h-auto w-32  drop-shadow-lg rounded-2xl'>
                                                <h1 className='text-2xl font-bold  rounded-2xl drop-shadow-lg'>Name Product</h1>
                                            </div>
                                        </div>
                                        <div className='border mt-2 rounded-2xl p-4 bg-black bg-opacity-50'>
                                            <h1 className='text-xs'>
                                                Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular.
                                            </h1>
                                        </div>

                                    </div>
                                    <div className='px-8 w-full '>
                                        <h1 className='font-bold  w-fit px-1 rounded-full bg-slate-900 text-xl  text-left'>$1500</h1>

                                    </div>
                                    <div className='p-2 w-11/12 m-auto h-12 text-center  bg-blue-700 rounded-full text-white  overflow-hidden'>

                                        <h1 className='font-bold text-xl'>Add to art</h1>
                                    </div>
                                </div>
                                <img className='h-full object-cover' src={Slides[index]} alt="" />
                            </button>)
                    })}



                </div>
            </div>



            <div className="absolute  h-24 overflow-hidden bottom-0 z-[9999] w-full ">

                <p className='flex justify-center'>
                    <button onMouseOver={() => { setStopcarousel(true) }} onMouseOut={() => { setStopcarousel(false) }} className="previous-button  bg-black w-64 xl:96 h-full border flex-shrink-0">Previous</button>
                    <button onMouseOver={() => { setStopcarousel(true) }} onMouseOut={() => { setStopcarousel(false) }} className="next-button bg-black h-full w-64  border flex-shrink-0">Next</button>
                </p>

            </div>

        </div>
    )
}

export default Carousel3D