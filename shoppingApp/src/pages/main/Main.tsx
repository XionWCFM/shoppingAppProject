import BrandCard from '../../components/productCard/BrandCard';
import { useGetProductCountQuery } from '../../modules/cozShoppingAPI';
import CategoryCard from '../../components/productCard/CategoryCard';
import ProductCard from '../../components/productCard/ProductCard';
import ExhibitionCard from '../../components/productCard/ExhibitonCard';

const Main = () => {
  const { data, isLoading, isError } = useGetProductCountQuery(4);
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  return (
    <div>
      <div>메인페이지에요</div>
      <BrandCard />
      <CategoryCard />
      <ProductCard />
      <ExhibitionCard />
    </div>
  );
};

export default Main;
