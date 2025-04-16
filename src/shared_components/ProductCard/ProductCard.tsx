type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <h1 className='text-2xl'>{children}</h1>;
};

const Image = ({ src }: { src: string }) => {
  return <img src={src} alt='Product Image' />;
};

const ProductCard = ({ children }: Props) => {
  return (
    <div className='h-auto w-fit bg-amber-50 rounded text-black'>
      {children}
    </div>
  );
};

ProductCard.Title = Title;
ProductCard.Image = Image;

export { ProductCard };
