import MainContainer from '../../components/layouts/MainContainer';
import CardContainer from '../../components/productCard/CardContainer';

const Main = () => {
  return (
    <MainContainer>
      <>
        <CardContainer>
          <h2 className=" text-2xl font-bold">상품 리스트</h2>
        </CardContainer>
        <CardContainer>
          <h2 className=" text-2xl font-bold">북마크 리스트</h2>
        </CardContainer>
      </>
    </MainContainer>
  );
};

export default Main;
