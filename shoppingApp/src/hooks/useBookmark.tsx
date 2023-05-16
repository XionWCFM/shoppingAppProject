import { useDispatch } from 'react-redux';
import { ProductType, ProductApi } from '../modules/ProductApi';
import getLocalStorage from '../utils/getLocalStorage';

const useBookmark = () => {
  const dispatch = useDispatch();
  const patch = ProductApi.util.updateQueryData;
  const bookmarkHanlder = (apiData: ProductType): void =>
    dispatch(
      patch('getProduct', undefined, (draft: ProductType[]) => {
        let localBookMarkData: ProductType[] = getLocalStorage<ProductType[]>(
          'bookmark',
          [],
        );

        const index = draft.findIndex(
          (data: ProductType) => data.id === apiData.id,
        );
        if (index === -1) return;
        draft[index].bookmark = !draft[index].bookmark;

        const bookMarkIndex = localBookMarkData.findIndex(
          (data: ProductType) => data.id === apiData.id,
        );

        if (bookMarkIndex === -1) {
          localBookMarkData = localBookMarkData.concat(apiData);
        } else {
          localBookMarkData.splice(bookMarkIndex, 1);
        }
        localStorage.bookmark = JSON.stringify(localBookMarkData);
      }),
    );
  return bookmarkHanlder;
};

export default useBookmark;
