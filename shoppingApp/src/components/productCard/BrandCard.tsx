import ProductImage from './ProductImage';
import { imageWidth } from './ImageWH';
import CardProps from '../../types/CardProps';
import { useState } from 'react';
import Modal from '../modal/Modal';

const BrandCard = ({ data }: CardProps) => {
  const { brand_name, brand_image_url, follower } = data;

  const [isOpen, setIsOpen] = useState(false);

  if (brand_image_url === null) return <div>에러</div>;

  return (
    <figure className={`flex flex-col max-w-[${imageWidth}]`}>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          src={brand_image_url}
          data={data}
          title={brand_name as string}
        />
      )}
      <ProductImage src={brand_image_url} data={data} />
      <div onClick={() => setIsOpen((state) => !state)} className="cardtext">
        <div className=" flex items-center justify-between">
          <span>{brand_name}</span>
          <span>관심고객수</span>
        </div>
        <div className="flex flex-row-reverse">
          <p className=" font-medium">{follower}</p>
        </div>
      </div>
    </figure>
  );
};

export default BrandCard;
