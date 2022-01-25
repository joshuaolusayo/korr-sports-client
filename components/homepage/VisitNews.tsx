import Image from 'next/image';
import Link from 'next/link';

const VisitNews = () => {
  return (
    <div className='w-full bg-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid sm:grid-cols-2 gap-6 md:gap-8'>
          <div className='relative w-full h-44 max-h-72 sm:order-last'>
            <Image className='object-cover rounded-xl' src='/assets/img1.jpg' layout='fill' />
          </div>
          <div className='grid'>
            <div className='m-auto'>
              <div>
                <span className='text-gray-700'>
                  We have all we need to win the Amole Cup this year. Our team is ready to go and win the cup this year. It's either we win or we win.
                  We are fully prepared. -
                </span>
                <span className='text-gray-500'>Taraa FC Boss</span>
              </div>
              <div className='flex justify-end'>
                <Link href='#'>
                  <a className='bg-primary inline-block py-3 w-44 rounded-md text-white text-center mt-3'>Read more...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center text-center mt-16'>
          <Link href='#'>
            <a className='text-primary text-2xl'>Visit News page</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisitNews;
