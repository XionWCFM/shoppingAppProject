import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import Modal from '../modal/Modal';
import { useState } from 'react';

const CategoryCard = ({ product }: CardProps) => {
  const { title, image_url } = product;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <figure className={`max-w-[${imageWidth}] flex flex-col`}>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          src={image_url}
          product={product}
          title={title}
        />
      )}
      <ProductImage src={image_url} product={product} />
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
