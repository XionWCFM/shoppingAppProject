import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import Modal from '../modal/Modal';
import { useState } from 'react';

const CategoryCard = ({ data }: CardProps) => {
  const { title, image_url } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <figure className={`max-w-[${imageWidth}] flex flex-col`}>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          src={image_url}
          data={data}
          title={title}
        />
      )}
      <ProductImage src={image_url} data={data} />
      <div
        onClick={() => setIsOpen((state) => !state)}
        className="cardtext flex"
      >
        <p># {title}</p>
      </div>
    </figure>
  );
};

export default CategoryCard;
