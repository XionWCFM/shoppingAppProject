import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import { ProductType, useGetProductQuery } from '../../modules/productApi';
import Error from '../../components/loading/Error';

const DATA_SIZE = 4;

const Main = () => {
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

  const defaultProductRender = data.slice(0, DATA_SIZE);
  const defaultBookMarkDataRender = data
    .filter((product: ProductType) => product.bookmark)
    .slice(0, DATA_SIZE);
  return (
    <MainContainer>
      <>
        <CardContainer product={defaultProductRender}>
          <h2 className=" text-2xl font-bold">상품 리스트</h2>
        </CardContainer>
        {defaultBookMarkDataRender.length === 0 ? (
          <>
            <h2 className=" text-2xl font-bold">북마크 리스트</h2>
            <p className=" py-7">북마크 된 상품이 없습니다.</p>
          </>
        ) : (
          <CardContainer product={defaultBookMarkDataRender}>
            <h2 className=" text-2xl font-bold">북마크 리스트</h2>
          </CardContainer>
        )}
      </>
    </MainContainer>
  );
};

export default Main;
