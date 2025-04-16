import { ProductCard } from './shared_components/ProductCard/ProductCard';

function App() {
  return (
    <ProductCard>
      <ProductCard.Title>Product Card</ProductCard.Title>
      <ProductCard.Image src='https://placehold.co/400x400' />
    </ProductCard>
  );
}

export default App;
