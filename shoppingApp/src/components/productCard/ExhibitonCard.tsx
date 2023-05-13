import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
import CardProps from '../../types/CardProps';

const ExhibitionCard = ({ data }: CardProps) => {
  const { title, sub_title, image_url, bookmark } = data;
  return (
    <figure className={`w-[${imageWidth}]`}>
      <ProductImage src={image_url} bookmark={bookmark} />
      <div className="cardtext flex flex-col">
        <p>{title}</p>
        <p>{sub_title}</p>
      </div>
    </figure>
  );
};

export default ExhibitionCard;
