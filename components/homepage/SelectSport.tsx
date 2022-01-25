const SelectSport = () => {
  return (
    <>
      <div className='w-full bg-primary'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-3 md:grid-cols-5 text-center'>
            <div className='py-3 bg-primary text-white border-4 border-white'>All</div>
            <div className='py-3 bg-gray text-white border-4 border-white'>Football</div>
            <div className='py-3 bg-gray text-white border-4 border-white'>Basketball</div>
            <div className='py-3 bg-gray text-white border-4 border-white'>Table Tennis</div>
            <div className='py-3 bg-gray text-white border-4 border-white'>Tracks</div>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-5 text-center bg-gray'>
            <div className='py-3 text-gray-100'>Sep 26</div>
            <div className='py-3 text-gray-100'>Sep 26</div>
            <div className='py-3 text-white'>Today</div>
            <div className='py-3 text-gray-100'>Sep 26</div>
            <div className='py-3 text-gray-100'>Sep 26</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSport;
