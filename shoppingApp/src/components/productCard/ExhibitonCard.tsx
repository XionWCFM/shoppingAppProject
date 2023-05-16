import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import { useState } from 'react';
import Modal from '../modal/Modal';

const ExhibitionCard = ({ product }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, sub_title, image_url } = product;

  return (
    <figure className={`flex flex-col max-w-[${imageWidth}]`}>
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
        className="cardtext flex flex-col"
      >
        <p>{title}</p>
        <p>{sub_title}</p>
      </div>
    </figure>
  );
};

export default ExhibitionCard;
