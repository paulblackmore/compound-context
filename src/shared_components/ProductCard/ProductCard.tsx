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

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className='rating rating-lg rating-half'>
      <input type='radio' name='rating-11' className='rating-hidden' />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-1 bg-yellow-500'
        aria-label='0.5 star'
        checked={rating === 0.5}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-2 bg-yellow-500'
        aria-label='1 star'
        checked={rating === 1}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-1 bg-yellow-500'
        aria-label='1.5 star'
        checked={rating === 1.5}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-2 bg-yellow-500'
        aria-label='2 star'
        checked={rating === 2}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-1 bg-yellow-500'
        aria-label='2.5 star'
        checked={rating === 2.5}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-2 bg-yellow-500'
        aria-label='3 star'
        checked={rating === 3}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-1 bg-yellow-500'
        aria-label='3.5 star'
        checked={rating === 3.5}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-2 bg-yellow-500'
        aria-label='4 star'
        checked={rating === 4}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-1 bg-yellow-500'
        aria-label='4.5 star'
        checked={rating === 4.5}
      />
      <input
        type='radio'
        name='rating-11'
        className='mask mask-star-2 mask-half-2 bg-yellow-500'
        aria-label='5 star'
        checked={rating === 5}
      />
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
