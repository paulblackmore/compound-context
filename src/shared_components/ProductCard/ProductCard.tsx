import React, { PropsWithChildren } from 'react';

type Props = {
  image?: React.ReactNode;
  content?: React.ReactNode;
  rating?: React.ReactNode;
};

const Image = ({ src }: { src: string }) => {
  return <img src={src} alt='Product Image' />;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className='mb-4 text-2xl font-bold'>{children}</h1>;
};

const Description = ({ children }: PropsWithChildren) => {
  return <p className='text-sm'>{children}</p>;
};

const Rating = () => {
  return (
    <div className='flex items-center'>
      <svg
        className='w-6 h-6 text-yellow-300 ms-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-6 h-6 text-yellow-300 ms-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-6 h-6 text-yellow-300 ms-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-6 h-6 text-yellow-300 ms-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-6 h-6 ms-1 text-gray-300 dark:text-gray-500'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
    </div>
  );
};

const ProductCard = ({ image, content, rating }: Props) => {
  return (
    <div className='h-auto w-sm bg-amber-50 text-black'>
      {image}
      <div className='mt-3 h-36 p-4'>{content}</div>
      <div className='h-12 flex justify-center mt-3'>{rating}</div>
    </div>
  );
};

ProductCard.Image = Image;
ProductCard.Title = Title;
ProductCard.Description = Description;
ProductCard.Rating = Rating;

export { ProductCard };
