import { useDispatch } from 'react-redux';
import { CozApiInterface, cozShoppingAPI } from '../modules/cozShoppingAPI';
import getLocalStorage from '../utils/getLocalStorage';

const useBookmark = () => {
  const dispatch = useDispatch();
  const patch = cozShoppingAPI.util.updateQueryData;
  const bookmarkHanlder = (apiData: CozApiInterface): void =>
    dispatch(
      patch('getProduct', undefined, (draft: CozApiInterface[]) => {
        let localBookMarkData: CozApiInterface[] = getLocalStorage<
          CozApiInterface[]
        >('bookmark', []);

        const index = draft.findIndex(
          (data: CozApiInterface) => data.id === apiData.id,
        );
        if (index === -1) return;
        draft[index].bookmark = !draft[index].bookmark;

        const bookMarkIndex = localBookMarkData.findIndex(
          (data: CozApiInterface) => data.id === apiData.id,
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
