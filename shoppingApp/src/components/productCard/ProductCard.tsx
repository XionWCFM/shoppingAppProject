import ProductImage from './ProductImage';
import { imageWidth } from '../../variable/ImageWH';
import CardProps from '../../types/CardProps';
import Modal from '../modal/Modal';
import { useState } from 'react';
const ProductCard = ({ data }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, price, discountPercentage, image_url } = data;
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
      <div onClick={() => setIsOpen((state) => !state)} className=" cardtext ">
        <div className=" flex items-center justify-between">
          <span className=" flex-shrink-0 overflow-hidden text-ellipsis">
            {title}
          </span>
          <span className=" text-pointbluelight">{`${discountPercentage}%`}</span>
        </div>
        <div className="flex flex-row-reverse">
          <p className=" font-medium">{`${price}원`}</p>
        </div>
      </div>
    </figure>
  );
};

export default ProductCard;
