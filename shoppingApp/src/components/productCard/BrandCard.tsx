import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
import CardProps from '../../types/CardProps';

const BrandCard = ({ data }: CardProps) => {
  const { brand_name, brand_image_url, follower, bookmark } = data;
  if (brand_image_url === null) return <div>에러</div>;

  return (
    <figure className={`w-[${imageWidth}]`}>
      <ProductImage src={brand_image_url} bookmark={bookmark} />
      <div className=" font-extrabold">
        <div className=" flex items-center justify-between">
          <span>{brand_name}</span>
          <span>관심고객수</span>
        </div>
        <div className="flex flex-row-reverse">
          <p className=" font-medium">{follower}</p>
        </div>
      </div>
    </figure>
  );
};

export default BrandCard;
