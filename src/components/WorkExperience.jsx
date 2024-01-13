import React from 'react'

const WorkExperience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white py-0'>Experience</p>
          <div className='gap-8 py-7'>
            <ol class="relative border-s border-gray-200 dark:border-white">
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-fuchsia-600 dark:text-white">The City University of New York (CUNY)<span class="bg-blue-100 bg-gradient-to-r text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 from-rounded from-purple-600 to-fuchsia-600 dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                <p class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">Information Technology Support Assistant</p>
                <time class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">July 2023 - Present</time>
                <p class="mb-4 text-base font-normal text-white dark:text-gray-400">This will align with the above once i input actual text todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo</p>
              </li>
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-fuchsia-600 dark:text-white">PingPod</h3>
                <p class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">Table Tennis Coach</p>
                <time class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">August 2011 - Present</time>
                <p class="text-base font-normal text-white dark:text-gray-400">TODO</p>
              </li>
              <li class="ms-6">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-fuchsia-600 dark:text-white">New York City Department of Youth and Community Development</h3>
                <p class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">Information Technology Assistant</p>
                <time class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">July 2016 - August 2019</time>
                <p class="text-base font-normal text-white dark:text-gray-400">TODO</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience