import { Link } from 'react-router-dom';
import errorimg from '../images/404.gif'
import { IoMdArrowRoundBack } from "react-icons/io";

const Error = () => {
    return (
        <section className='w-10/12 mx-auto py-3'>
            <Link to={'/'} className='text-2xl md:text-3xl font-semibold flex items-center'><IoMdArrowRoundBack /> Back Home</Link>
            <section className='flex justify-center items-center'>
            <img src={errorimg} alt="" />
        </section>
        </section>
    );
};

export default Error;