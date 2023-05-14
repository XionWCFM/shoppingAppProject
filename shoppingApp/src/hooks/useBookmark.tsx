import { useDispatch } from 'react-redux';
import { CozApiInterface, cozShoppingAPI } from '../modules/cozShoppingAPI';

const useBookmark = () => {
  const dispatch = useDispatch();
  const patch = cozShoppingAPI.util.updateQueryData;
  const bookmarkHanlder = (apiData: CozApiInterface): void =>
    dispatch(
      patch('getProduct', undefined, (draft: CozApiInterface[]) => {
        const index = draft.findIndex(
          (data: CozApiInterface) => data.id === apiData.id,
        );
        console.log(index);
        if (index !== -1) {
          draft[index].bookmark = !draft[index].bookmark;
        } else {
          console.log('일단 뭐라도 한다..');
        }
      }),
    );
  return bookmarkHanlder;
};

export default useBookmark;
