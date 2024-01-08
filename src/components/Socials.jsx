import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Socials = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>

            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href="https://www.linkedin.com/in/stevengranaturov/" className='flex justify-between items-center w-full text-white' target='_blank'>
                        <> 
                        LinkedIn <FaLinkedin size={30} />
                        </>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href="https://github.com/ander9991" className='flex justify-between items-center w-full text-white' target='_blank'>
                        <> 
                        GitHub <FaGithub size={30} />
                        </>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href="mailto:stevengranaturov2001@gmail.com" className='flex justify-between items-center w-full text-white' target='_blank'>
                        <> 
                        Email <HiOutlineMail size={30} />
                        </>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href="/Steven_Granaturov_Resume.pdf" className='flex justify-between items-center w-full text-white' target='_blank' download={true}>
                        <> 
                        Resume <BsFillPersonLinesFill size={30} />
                        </>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Socials