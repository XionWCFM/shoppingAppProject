import { ProductType } from '../modules/productApi';
import { ModalType } from '../modules/modalSlice';

const modalAttributeMatcher = (product: ProductType) => {
  const matchedObj: ModalType = {
    title: '매칭되는 상품 정보가 없습니다.',
    src: 'default img url',
    isOpen: false,
    product: product,
  };

  matchedObj.title = (
    product.title ? product.title : product.brand_name
  ) as string;
  matchedObj.src = (
    product.image_url ? product.image_url : product.brand_image_url
  ) as string;

  return matchedObj;
};

export default modalAttributeMatcher;
