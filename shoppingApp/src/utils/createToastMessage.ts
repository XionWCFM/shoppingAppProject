const createToastMessage = (bookmark: boolean) => {
  const toastMessage = bookmark
    ? {
        id: Number(new Date()),
        content: '북마크에 추가 되었습니다.',
        bookmark: true,
      }
    : {
        id: Number(new Date()),
        content: '북마크에서 제거 되었습니다.',
        bookmark: false,
      };

  return toastMessage;
};
export default createToastMessage;
