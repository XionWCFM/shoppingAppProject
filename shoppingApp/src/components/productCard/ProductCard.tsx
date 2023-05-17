import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import { useDispatch } from 'react-redux';
import modalAttributeMatcher from '../../utils/modalAttributeMatcher';
import { openModal } from '../../modules/modalSlice';

const ProductCard = ({ product }: CardProps) => {
  const { title, price, discountPercentage, image_url } = product;
  const dispatch = useDispatch();
  const modalArguments = modalAttributeMatcher(product);

  return (
    <figure className={`max-w-[${imageWidth}] flex flex-col`}>
      <ProductImage src={image_url} product={product} />
      <div
        className=" cardtext "
        onClick={() => dispatch(openModal(modalArguments))}
      >
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
