import MainContainer from '../../components/layouts/MainContainer';
import Loading from '../../components/loading/Loading';
import CardContainer from '../../components/productCard/CardContainer';
import {
  CozApiInterface,
  useGetProductQuery,
} from '../../modules/cozShoppingAPI';

const Bookmark = () => {
  const { data, isError, isLoading } = useGetProductQuery(undefined);

  if (isLoading || isError || !data)
    return (
      <MainContainer>
        <>
          <Loading />
        </>
      </MainContainer>
    );

  const bookMarkData = data.filter(
    (apiData: CozApiInterface) => apiData.bookmark,
  );
  console.log(bookMarkData.length);
  return (
    <MainContainer>
      <>
        <h2 className=" text-2xl font-bold">북마크 리스트</h2>
        {bookMarkData.length === 0 ? (
          <p className=" py-7">북마크 된 상품이 없습니다.</p>
        ) : (
          <CardContainer apiData={bookMarkData}>
            <h2 className=" text-2xl font-bold">북마크 리스트</h2>
          </CardContainer>
        )}
      </>
    </MainContainer>
  );
};

export default Bookmark;
