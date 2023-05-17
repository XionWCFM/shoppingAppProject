import ProductImage from './ProductImage';
import { imageWidth } from '../../enums/ImageWH';
import CardProps from '../../types/CardProps';
import { useDispatch } from 'react-redux';
import { openModal } from '../../modules/modalSlice';
import modalAttributeMatcher from '../../utils/modalAttributeMatcher';

const BrandCard = ({ product }: CardProps) => {
  const { brand_name, brand_image_url, follower } = product;
  const dispatch = useDispatch();
  const modalArguments = modalAttributeMatcher(product);

  if (brand_image_url === null) return <div>에러</div>;
  return (
    <figure className={`flex flex-col max-w-[${imageWidth}]`}>
      <ProductImage src={brand_image_url} product={product} />
      <div
        className="cardtext"
        onClick={() => dispatch(openModal(modalArguments))}
      >
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
