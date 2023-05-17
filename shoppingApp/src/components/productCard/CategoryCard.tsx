import ProductImage from './ProductImage';
import CardProps from '../../types/CardProps';
import modalAttributeMatcher from '../../utils/modalAttributeMatcher';
import { imageWidth } from '../../enums/ImageWH';
import { openModal } from '../../modules/modalSlice';
import { useDispatch } from 'react-redux';

const CategoryCard = ({ product }: CardProps) => {
  const { title, image_url } = product;
  const dispatch = useDispatch();
  const modalArguments = modalAttributeMatcher(product);

  return (
    <figure className={`max-w-[${imageWidth}] flex flex-col`}>
      <ProductImage src={image_url} product={product} />
      <div
        className="cardtext flex"
        onClick={() => dispatch(openModal(modalArguments))}
      >
        <p># {title}</p>
      </div>
    </figure>
  );
};

export default CategoryCard;
