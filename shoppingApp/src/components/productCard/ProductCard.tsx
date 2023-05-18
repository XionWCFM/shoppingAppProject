import ProductImage from './ProductImage';
import CardProps from '../../types/CardProps';
import { imageWidth } from '../../enums/ImageWH';
import { openModal } from '../../modules/modalSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }: CardProps) => {
  const { title, price, discountPercentage, image_url } = product;
  const dispatch = useDispatch();

  return (
    <figure className={`max-w-[${imageWidth}] flex flex-col`}>
      <ProductImage src={image_url} product={product} />
      <div className=" cardtext " onClick={() => dispatch(openModal(product))}>
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
