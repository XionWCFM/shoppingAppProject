import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import { useGetProductQuery } from '../../modules/cozShoppingAPI';

const Main = () => {
  const { data, isError, isLoading } = useGetProductQuery(undefined);

  if (isLoading || isError || !data)
    return (
      <MainContainer>
        <>
          <Loading />
        </>
      </MainContainer>
    );

  const onlyFourDataRender = data.slice(0, 4);

  return (
    <MainContainer>
      <>
        <CardContainer apiData={onlyFourDataRender}>
          <h2 className=" text-2xl font-bold">상품 리스트</h2>
        </CardContainer>
        <CardContainer apiData={onlyFourDataRender}>
          <h2 className=" text-2xl font-bold">북마크 리스트</h2>
        </CardContainer>
      </>
    </MainContainer>
  );
};

export default Main;
