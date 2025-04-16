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
const ProductCard = ({ image, content, rating }: Props) => {
  return (
    <div className='h-auto w-sm bg-amber-50 text-black'>
      {image}
      <div className='mt-3 p-4'>{content}</div>
      <div className='flex justify-center items-center mt-3'>{rating}</div>
    </div>
  );
};

ProductCard.Image = Image;
ProductCard.Title = Title;
ProductCard.Description = Description;

export { ProductCard };
