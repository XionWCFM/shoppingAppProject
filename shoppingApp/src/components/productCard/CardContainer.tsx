import { useGetProductQuery } from '../../modules/cozShoppingAPI';
import { CozApiInterface } from '../../modules/cozShoppingAPI';
import BrandCard from './BrandCard';
import CategoryCard from './CategoryCard';
import ExhibitionCard from './ExhibitonCard';
import ProductCard from './ProductCard';
import { ReactElement } from 'react';

const PRODUCT = 'Product';
const CATEGORY = 'Category';
const EXHIBITION = 'Exhibition';
const BRAND = 'Brand';

interface Props {
  children: ReactElement;
  apiData: CozApiInterface[];
}

const CardContainer = ({ children, apiData }: Props) => {
  const { data, isError, isLoading } = useGetProductQuery(undefined);

  if (isLoading) return <div>엄wnstlr</div>;
  if (isError) return <div>엄</div>;
  if (!data) return <div>엄</div>;

  return (
    <section className=" mb-[1.88rem] max-w-[70.5rem]">
      {children}
      <div className=" mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-2 xl:grid-cols-4 xl:gap-3">
        {apiData.map((data: CozApiInterface) => {
          switch (data.type) {
            case PRODUCT:
              return <ProductCard data={data} key={`card${data.id}`} />;
            case CATEGORY:
              return <CategoryCard data={data} key={`card${data.id}`} />;
            case EXHIBITION:
              return <ExhibitionCard data={data} key={`card${data.id}`} />;
            case BRAND:
              return <BrandCard data={data} key={`card${data.id}`} />;
          }
        })}
      </div>
    </section>
  );
};

export default CardContainer;
