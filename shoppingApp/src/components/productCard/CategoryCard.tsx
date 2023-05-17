import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import { useDispatch } from 'react-redux';
import modalAttributeMatcher from '../../utils/modalAttributeMatcher';
import { openModal } from '../../modules/modalSlice';

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
