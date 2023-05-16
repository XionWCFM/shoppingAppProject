import { ReactElement } from 'react';
import { ProductType } from '../../modules/productApi';
import BrandCard from './BrandCard';
import CategoryCard from './CategoryCard';
import ExhibitionCard from './ExhibitonCard';
import ProductCard from './ProductCard';
import { CardVariable } from '../../variable/CardVariable';

const { PRODUCT, CATEGORY, EXHIBITION, BRAND } = CardVariable;

interface Props {
  children: ReactElement;
  product: ProductType[];
}

const CardContainer = ({ children, product }: Props) => {
  return (
    <section className=" mb-[1.88rem] max-w-[70.5rem]">
      {children}
      <div className=" mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:grid-cols-4 xl:gap-6 ">
        {product.map((product: ProductType) => {
          switch (product.type) {
            case PRODUCT:
              return (
                <ProductCard product={product} key={`card${product.id}`} />
              );
            case CATEGORY:
              return (
                <CategoryCard product={product} key={`card${product.id}`} />
              );
            case EXHIBITION:
              return (
                <ExhibitionCard product={product} key={`card${product.id}`} />
              );
            case BRAND:
              return <BrandCard product={product} key={`card${product.id}`} />;
          }
        })}
      </div>
    </section>
  );
};

export default CardContainer;
