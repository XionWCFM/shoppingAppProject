import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
const ExhibitionCard = () => {
  return (
    <figure className={`w-[${imageWidth}]`}>
      <ProductImage />
      <div className="flex flex-col font-extrabold">
        <p># {`카테고리이름`}</p>
      </div>
    </figure>
  );
};

export default ExhibitionCard;
