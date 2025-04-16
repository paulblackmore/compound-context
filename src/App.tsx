import { ProductCard } from './shared_components/ProductCard/ProductCard';

type Product = {
  image: string;
  title: string;
  desc: string;
};

const product: Product = {
  image: 'https://placehold.co/400x400',
  title: 'Product Title',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
};

function App() {
  return (
    <ProductCard
      image={<ProductCard.Image src={product.image} />}
      content={
        <>
          <ProductCard.Title>{product.title}</ProductCard.Title>
          <ProductCard.Description>{product.desc}</ProductCard.Description>
        </>
      }
      rating={<p>start rating</p>}
    />
  );
}

export default App;
