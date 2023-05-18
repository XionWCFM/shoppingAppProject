import { ProductType } from '../modules/productApi';

const modalAttributeMatcher = (product: ProductType) => {
  return {
    title: (product.title ? product.title : product.brand_name) as string,
    src: (product.image_url
      ? product.image_url
      : product.brand_image_url) as string,
  };
};

export default modalAttributeMatcher;
