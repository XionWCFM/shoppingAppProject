import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
const CategoryCard = () => {
  return (
    <figure className={`w-[${imageWidth}]`}>
      <ProductImage />
      <div className="flex font-extrabold">
        <p># {`카테고리이름`}</p>
      </div>
    </figure>
  );
};

export default CategoryCard;
