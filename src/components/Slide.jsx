import { Link } from 'react-router-dom'

const Slide = ({ image, text, text2 }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-800/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {text}
                    </h1>
                    <p className='text-lg text-gray-300 max-w-xs md:max-w-md'>{text2}</p>
                    <br />
                    <Link
                        to='/artifacts'
                        className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform hover:bg-blue-900 rounded-md lg:w-auto bg-[#ac9a1a] focus:outline-none focus:bg-gray-500'
                    >
                        Let's Track
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
