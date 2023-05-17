import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import { openModal } from '../../modules/modalSlice';
import { useDispatch } from 'react-redux';
import modalAttributeMatcher from '../../utils/modalAttributeMatcher';

const ExhibitionCard = ({ product }: CardProps) => {
  const { title, sub_title, image_url } = product;
  const dispatch = useDispatch();
  const modalArguments = modalAttributeMatcher(product);

  return (
    <figure className={`flex flex-col max-w-[${imageWidth}]`}>
      <ProductImage src={image_url} product={product} />
      <div
        className="cardtext flex flex-col"
        onClick={() => dispatch(openModal(modalArguments))}
      >
        <p>{title}</p>
        <p>{sub_title}</p>
      </div>
    </figure>
  );
};

export default ExhibitionCard;
