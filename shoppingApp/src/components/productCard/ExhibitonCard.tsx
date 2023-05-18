import ProductImage from './ProductImage';
import CardProps from '../../types/CardProps';
import { imageWidth } from '../../enums/ImageWH';
import { openModal } from '../../modules/modalSlice';
import { useDispatch } from 'react-redux';

const ExhibitionCard = ({ product }: CardProps) => {
  const { title, sub_title, image_url } = product;
  const dispatch = useDispatch();

  return (
    <figure className={`flex flex-col max-w-[${imageWidth}]`}>
      <ProductImage src={image_url} product={product} />
      <div
        className="cardtext flex flex-col"
        onClick={() => dispatch(openModal(product))}
      >
        <p>{title}</p>
        <p>{sub_title}</p>
      </div>
    </figure>
  );
};

export default ExhibitionCard;
