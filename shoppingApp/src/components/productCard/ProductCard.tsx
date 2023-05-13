import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
import CardProps from '../../types/CardProps';
const ProductCard = ({ data }: CardProps) => {
  const { title, price, discountPercentage, image_url, bookmark } = data;
  return (
    <figure className={`max-w-[${imageWidth}] flex flex-col`}>
      <ProductImage src={image_url} bookmark={bookmark} data={data} />
      <div className=" cardtext ">
        <div className=" flex items-center justify-between">
          <span className=" flex-shrink-0 overflow-hidden text-ellipsis">
            {title}
          </span>
          <span className=" text-pointbluelight">{`${discountPercentage}%`}</span>
        </div>
        <div className="flex flex-row-reverse">
          <p className=" font-medium">{`${price}원`}</p>
        </div>
      </div>
    </figure>
  );
};

export default ProductCard;
