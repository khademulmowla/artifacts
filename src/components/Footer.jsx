import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/images/logo.png'
const Footer = () => {
    return (
        <footer className='dark:text-white shadow-sm bg-gray-200 dark:bg-gray-800'>
            <hr />
            <div className='container px-6 py-8 mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src={logo} alt='' />
                        <span>Artifacts</span>
                    </div>

                    <div className='flex flex-wrap justify-center mt-6 -mx-4'>
                        <a
                            href='/'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-[#d59b27]'
                            aria-label='Reddit'
                        >
                            {' '}
                            Home{' '}
                        </a>
                        <a
                            href='/artifacts'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-[#d59b27]'
                            aria-label='Reddit'
                        >
                            {' '}
                            All Artifacts{' '}
                        </a>

                        <a
                            href='/aboutus'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-[#d59b27]'
                            aria-label='Reddit'
                        >
                            {' '}
                            About Us{' '}
                        </a>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10 ' />

                <div className='flex flex-col items-center sm:flex-row sm:justify-between space-y-2'>
                    <p className='text-sm'>
                        © Copyright 2025. All Rights Reserved.
                    </p>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com/khademulmowla.aupu.7/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/khademulmowla" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/khademulmowla" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
