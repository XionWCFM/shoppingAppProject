import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
const BrandCard = () => {
  return (
    <figure className={`w-[${imageWidth}]`}>
      <ProductImage />
      <div className=" font-extrabold">
        <div className=" flex items-center justify-between">
          <span>브랜드이름</span>
          <span>관심 고객수</span>
        </div>
        <div className="flex flex-row-reverse">
          <p className=" font-medium">카운터</p>
        </div>
      </div>
    </figure>
  );
};

export default BrandCard;
