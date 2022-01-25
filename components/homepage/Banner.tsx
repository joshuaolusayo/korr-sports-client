import style from 'styles/Banner.module.css';

const Banner = () => {
  return (
    <div
      style={{ background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/img1.jpg')" }}
      className={`${style.container} w-full grid px-4 relative`}
    >
      <div className='m-auto text-center text-white'>
        <div className='w-full max-w-4xl mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4'>Welcome to Korr Sports</h1>
          <div className='text-gray-100 text-lg md:text-xl'>
            <span>Live updates, Local Sport News,</span>
            <br />
            <span>Communities, Store and More...</span>
          </div>
        </div>
      </div>

      <div className='absolute bottom-4 w-full text-center'>
        <a className='text-white font-bold text-xl' href='#'>
          Watch Live Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
