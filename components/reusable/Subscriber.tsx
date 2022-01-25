const Subscriber = () => {
  return (
    <div className='w-full py-16 lg:py-20'>
      <div className='container mx-auto px-4'>
        <div className='w-full max-w-xl mx-auto'>
          <h1 className='text-primary text-2xl text-center mb-2'>Subscribe to our newsletter</h1>
          <input type='text' className='bg-white border border-gray focus:outline-none px-3 py-2 w-full rounded-md' />
          <div className='grid'>
            <div className='mx-auto mt-6'>
              <button className='bg-primary text-white py-3 w-56 rounded-lg'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
