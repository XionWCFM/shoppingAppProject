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
          console.log('엄');
        } else {
          console.log('엄준식');
        }
      }),
    );
  return bookmarkHanlder;
};

export default useBookmark;
