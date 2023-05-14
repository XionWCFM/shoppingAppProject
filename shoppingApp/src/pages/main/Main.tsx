import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import {
  CozApiInterface,
  useGetProductQuery,
} from '../../modules/cozShoppingAPI';

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
  const onlyFourBookMarkDataRender = data
    .filter((apiData: CozApiInterface) => apiData.bookmark)
    .slice(0, 4);
  return (
    <MainContainer>
      <>
        <CardContainer apiData={onlyFourDataRender}>
          <h2 className=" text-2xl font-bold">상품 리스트</h2>
        </CardContainer>
        {onlyFourBookMarkDataRender.length === 0 ? (
          <>
            <h2 className=" text-2xl font-bold">북마크 리스트</h2>
            <p className=" py-7">북마크 된 상품이 없습니다.</p>
          </>
        ) : (
          <CardContainer apiData={onlyFourBookMarkDataRender}>
            <h2 className=" text-2xl font-bold">북마크 리스트</h2>
          </CardContainer>
        )}
      </>
    </MainContainer>
  );
};

export default Main;
