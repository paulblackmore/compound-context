import { ProductCard } from './shared_components/ProductCard/ProductCard';

type Product = {
  image: string;
  title: string;
  desc: string;
  rating: number;
};

const product: Product = {
  image: 'https://placehold.co/400x400',
  title: 'Standard Chunk',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  rating: 2.5,
};

function App() {
  return (
    <div className='p-5'>
      <ProductCard
        image={<ProductCard.Image src={product.image} />}
        content={
          <>
            <ProductCard.Title>{product.title}</ProductCard.Title>
            <ProductCard.Description>{product.desc}</ProductCard.Description>
          </>
        }
        rating={<ProductCard.Rating rating={product.rating} />}
      />
    </div>
  );
}

export default App;
