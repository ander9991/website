import React from 'react'

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white py-0'>Education</p>
          <div className='gap-8 py-7'>
            <ol class="relative border-s border-gray-200 dark:border-white">
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-fuchsia-600 dark:text-white">New York University Tandon School of Engineering <span class="bg-blue-100 bg-gradient-to-r text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 from-rounded from-purple-600 to-fuchsia-600 dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                <p class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">Master of Science: Computer Science</p>
                <time class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">September 2023 - Present</time>
                <p class="mb-4 text-base font-normal text-white max-w-xl dark:text-gray-400">Related Coursework: Foundations of Data Science, Machine Learning</p>
              </li>
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-fuchsia-600 dark:text-white">The City College of New York Grove School of Engineering</h3>
                <p class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">Bachelor of Science: Computer Science</p>
                <time class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">August 2019 - September 2023</time>
                <p class="text-base font-normal text-white max-w-xl dark:text-gray-400"> Related Coursework: Discrete Structures, Algorithms, Data Structures, Software Design Laboratory, Computer Systems, Software Engineering, Database Systems, Operating Systems, Theoretical Computer Science, Computer Organization, Programming Paradigms, Scientific Programming, Computer Organization, Data Science, Intro to Machine Learning, Website Design, Senior Design I & II
                </p>
              </li>
              <li class="ms-6">
                <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-fuchsia-600 dark:text-white">Leon M Goldstein High School for the Sciences</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-white dark:text-gray-500">September 2015 - June 2019</time>
                <p class="text-base font-normal text-white max-w-xl dark:text-gray-400">Advanced High School Diploma</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education