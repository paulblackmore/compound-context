import { ReactNode } from 'react';
import { ProductContext, useProduct } from './useProduct';
import { Product } from '../../App';

type Props = {
  product: Product;
  image?: ReactNode;
  content?: ReactNode;
  rating?: ReactNode;
};

const STAR_VARIATIONS = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

const Image = () => {
  const product = useProduct();
  return <img src={product.image} alt='Product Image' />;
};

const Title = () => {
  const product = useProduct();
  return <h1 className='mb-4 text-2xl font-bold'>{product.title}</h1>;
};

const Description = () => {
  const product = useProduct();
  return <p className='text-sm'>{product.desc}</p>;
};

const Rating = () => {
  const product = useProduct();
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
            defaultChecked={product.rating === value}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ product, image, content, rating }: Props) => (
  <ProductContext.Provider value={product}>
    <div className='h-auto w-sm bg-amber-50 text-black'>
      {image}
      <div className='mt-3 h-36 p-4'>{content}</div>
      <div className='h-12 flex justify-center mt-3'>{rating}</div>
    </div>
  </ProductContext.Provider>
);

ProductCard.Image = Image;
ProductCard.Title = Title;
ProductCard.Description = Description;
ProductCard.Rating = Rating;

export { ProductCard };
