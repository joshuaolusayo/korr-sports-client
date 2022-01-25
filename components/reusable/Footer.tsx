import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full py-16 lg:py-20 bg-gray text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <Link href='#'>
            <a className='md:pr-3 mb-3'>Contact Us</a>
          </Link>
          <Link href='#'>
            <a className='md:px-3 mb-3 md:border-l md:border-r'>Terms and conditions</a>
          </Link>
          <Link href='#'>
            <a className='md:pl-3 mb-3'>Volunteer</a>
          </Link>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <Link href='#'>
            <a className='md:pr-3 mb-3'>Forums</a>
          </Link>
          <Link href='#'>
            <a className='md:px-3 mb-3 md:border-l md:border-r'>Premium Membership</a>
          </Link>
          <Link href='#'>
            <a className='md:px-3 mb-3 md:border-l md:border-r'>Donate to Us</a>
          </Link>
          <Link href='#'>
            <a className='md:pl-3 mb-3'>About Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
