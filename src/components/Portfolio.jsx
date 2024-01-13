import React from 'react'
import stock from '../assets/stock.jpg'
import DataScience from '../assets/DataScience.png'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import priceHub from '../assets/PriceHub.png'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: stock,
            demo: 'https://slides.com/ander999/code',
            code: 'https://github.com/ander9991/CS-GY-6923-Machine-Learning',
        },
        {
            id: 2,
            src: priceHub,
            demo: 'https://www.youtube.com/watch?v=DoUDaWJBVTU',
            code: 'https://github.com/ander9991/PriceHub',
        },
        {
            id: 3,
            src: DataScience,
            demo: 'https://youtu.be/2r2Jh-wbTnk',
            code: 'https://github.com/ander9991/CS-GY-6053-Data-Science'
        },
        {
            id: 4,
            src: reactParallax,
            demo: 'https://github.com/ander9991',
            code: 'https://github.com/ander9991',
        },
        {
            id: 5,
            src: reactSmooth,
            demo: 'https://github.com/ander9991',
            code: 'https://github.com/ander9991',
        },
        {
            id: 6,
            src: reactWeather,
            demo: 'https://github.com/ander9991',
            code: 'https://github.com/ander9991',
        },
    ]

    const handleClick = (link) => {
        // Use window.location.href to navigate to the specified link
        window.location.href = link;
      };


    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolio.map(({id, src, demo, code}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 object-contain' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(demo)}>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(code)}>Code</button>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Portfolio