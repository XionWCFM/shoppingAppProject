import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import { ProductType, useGetProductQuery } from '../../modules/productApi';
import Error from '../../components/loading/Error';
const Bookmark = () => {
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

  const bookMarkData = data.filter((product: ProductType) => product.bookmark);

  return (
    <MainContainer>
      <>
        <h2 className=" text-2xl font-bold">북마크 리스트</h2>
        {bookMarkData.length === 0 ? (
          <p className=" py-7">북마크 된 상품이 없습니다.</p>
        ) : (
          <CardContainer product={bookMarkData}>
            <h2 className=" text-2xl font-bold">북마크 리스트</h2>
          </CardContainer>
        )}
      </>
    </MainContainer>
  );
};

export default Bookmark;
