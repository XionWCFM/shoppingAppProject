import { useDispatch } from 'react-redux';
import { ProductType, ProductApi } from '../modules/productApi';
import getLocalStorage from '../utils/getLocalStorage';

const useBookmark = () => {
  const dispatch = useDispatch();
  const patch = ProductApi.util.updateQueryData;
  const bookmarkHanlder = (targetProduct: ProductType): void =>
    dispatch(
      patch('getProduct', undefined, (draft: ProductType[]) => {
        let localBookMarkData: ProductType[] = getLocalStorage<ProductType[]>(
          'bookmark',
          [],
        );

        const index = draft.findIndex(
          (product: ProductType) => product.id === targetProduct.id,
        );
        if (index === -1) return;
        draft[index].bookmark = !draft[index].bookmark;

        const bookMarkIndex = localBookMarkData.findIndex(
          (product: ProductType) => product.id === targetProduct.id,
        );

        if (bookMarkIndex === -1) {
          localBookMarkData = localBookMarkData.concat(targetProduct);
        } else {
          localBookMarkData.splice(bookMarkIndex, 1);
        }
        localStorage.bookmark = JSON.stringify(localBookMarkData);
      }),
    );
  return bookmarkHanlder;
};

export default useBookmark;
