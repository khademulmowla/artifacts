import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className='bg-[#060505]'>
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;