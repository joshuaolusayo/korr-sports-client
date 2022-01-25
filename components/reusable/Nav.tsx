import React, { useState, useEffect, useRef, ReactNode, MutableRefObject, DetailedHTMLProps, HTMLAttributes } from 'react';
// import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useRouter } from 'next/router';

export default function Nav() {
  const { pathname } = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {/* <div className='w-full py-2 bg-black border-t-2 border-b-2 xl:border-0 border-primary fixed top-0 z-20' ref={targetRef}> */}
      <div className='w-full py-2 bg-gray border-t-2 border-b-2 xl:border-0 border-gray fixed top-0 z-20'>
        <div className='container mx-auto px-4'>
          <nav className='flex justify-between items-center'>
            <Link href='/'>
              <a className='text-white'>
                Logo
                {/* <Image
                  className='object-contain'
                  src='#'
                  alt='logo'
                  width='110'
                  height='35'
                /> */}
              </a>
            </Link>

            <div className='xl:hidden'>
              <Hamburger toggled={isOpen} toggle={setOpen} color='#CC5500' distance='lg' rounded label='show menu' size={35} hideOutline />
            </div>
            <div
              className={`${
                !isOpen
                  ? 'hidden xl:flex justify-between items-center'
                  : 'bg-gray flex flex-col absolute top-20 w-full left-0 -mt-5 py-4 rounded-bg h-nav-screen z-10'
              }`}
            >
              <ul className={`flex ${!isOpen ? 'flex-row' : 'flex-col container mx-auto px-4 text-right'}`}>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-t-2 border-gray-100'>
                  <Link href='/'>
                    <a className={`${pathname === '/' ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>Home</a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/watch'>
                    <a className={`${pathname === '/watch' ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>Watch Live</a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/competitions'>
                    <a className={`${pathname.startsWith('/competitions') ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>
                      Competitions
                    </a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/news'>
                    <a className={`${pathname === '/news' ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>Sports News</a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/store'>
                    <a className={`${pathname === '/store' ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>Sports Store</a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/forums'>
                    <a className={`${pathname === '/forums' ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>Forums</a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:mx-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/membership'>
                    <a className={`${pathname === '/membership' ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>
                      Membership
                    </a>
                  </Link>
                </li>
                <li className='my-0 mx-0 py-3 xl:ml-6 border-b-2 xl:border-0 border-gray-100'>
                  <Link href='/donate'>
                    <a className={`${pathname.startsWith('/donate') ? 'text-primary' : 'text-white'} py-2 rounded hover-text-primary text-lg`}>
                      Donate to us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* @media screen and (min-width: 1280px) {
            .fn {
              height: 76px;
            }
          } */}

      <div className='fn'></div>

      <style jsx>
        {`
          .fn {
            height: 68px;
          }
        `}
      </style>
    </div>
  );
}
