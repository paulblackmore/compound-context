import React, { PropsWithChildren } from 'react';

type Props = {
  image?: React.ReactNode;
  content?: React.ReactNode;
  rating?: React.ReactNode;
};

const STAR_VARIATIONS = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

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
      <input type='radio' className='rating-hidden' />
      {STAR_VARIATIONS.map((value: number) => {
        const mask = Number.isInteger(value) ? 'mask-half-2' : 'mask-half-1';
        return (
          <input
            key={value}
            type='radio'
            className={`mask mask-star-2 ${mask} bg-yellow-500`}
            aria-label={`${value} star`}
            defaultChecked={rating === value}
          />
        );
      })}
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
