import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import { useGetProductQuery } from '../../modules/cozShoppingAPI';
import FilterCategory from './FilterCategory';
import { filterImage } from '../../assets/filterimage/index';

const List = () => {
  const { data, isError, isLoading } = useGetProductQuery(undefined);

  if (isLoading || isError || !data)
    return (
      <MainContainer>
        <>
          <Loading />
        </>
      </MainContainer>
    );

  return (
    <MainContainer>
      <>
        <FilterCategory filterImage={filterImage} />
        <CardContainer apiData={data}>
          <h2 className=" text-2xl font-bold">상품 리스트</h2>
        </CardContainer>
      </>
    </MainContainer>
  );
};

export default List;
