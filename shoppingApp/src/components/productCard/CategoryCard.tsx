import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
import CardProps from '../../types/CardProps';

const CategoryCard = ({ data }: CardProps) => {
  const { title, image_url, bookmark } = data;

  return (
    <figure className={`w-[${imageWidth}]`}>
      <ProductImage src={image_url} bookmark={bookmark} />
      <div className="cardtext flex">
        <p># {title}</p>
      </div>
    </figure>
  );
};

export default CategoryCard;
