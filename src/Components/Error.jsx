import errorimg from '../images/404.gif'

const Error = () => {
    return (
        <section className='flex justify-center items-center'>
            <img src={errorimg} alt="" />
        </section>
    );
};

export default Error;