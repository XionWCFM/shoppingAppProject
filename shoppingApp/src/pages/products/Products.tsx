import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import { ProductType, useGetProductQuery } from '../../modules/productApi';
import FilterCategory from './FilterCategory';
import { filterImage } from '../../assets/filterimage/index';
import { useParams } from 'react-router-dom';
import {
  CardVariable,
  lowerCaseCardVariable,
} from '../../variable/CardVariable';
import Error from '../../components/loading/Error';

const { PRODUCT, CATEGORY, EXHIBITION, BRAND } = CardVariable;
const { product, category, exhibition, brand, list } = lowerCaseCardVariable;

const Products = () => {
  const { filterlist } = useParams();

  const { data, isError, isLoading } = useGetProductQuery(undefined);
  if (isLoading)
    return (
      <MainContainer>
        <Loading />
      </MainContainer>
    );

  if (isError || !data)
    return (
      <MainContainer>
        <Error />
      </MainContainer>
    );
  let filteredProduct: ProductType[] = [];

  switch (filterlist) {
    case product:
      filteredProduct = data.filter(
        (product: ProductType) => product.type === PRODUCT,
      );
      break;
    case category:
      filteredProduct = data.filter(
        (product: ProductType) => product.type === CATEGORY,
      );
      break;
    case exhibition:
      filteredProduct = data.filter(
        (product: ProductType) => product.type === EXHIBITION,
      );
      break;
    case brand:
      filteredProduct = data.filter(
        (product: ProductType) => product.type === BRAND,
      );
      break;
    case list:
      filteredProduct = data;
      break;
    default:
      return <div>잘못된 경로입니다.</div>;
  }

  return (
    <MainContainer>
      <>
        <FilterCategory filterImage={filterImage} />
        <CardContainer product={filteredProduct}>
          <h2 className=" text-2xl font-bold">상품 리스트</h2>
        </CardContainer>
      </>
    </MainContainer>
  );
};

export default Products;
