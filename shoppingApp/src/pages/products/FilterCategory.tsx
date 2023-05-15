import { Link } from 'react-router-dom';
import { FilterImageInterface } from '../../assets/filterimage/index';

export interface FilterCategoryProps {
  filterImage: FilterImageInterface[];
}

const FilterCategory = ({ filterImage }: FilterCategoryProps) => {
  return (
    <ul className=" flex">
      {filterImage.map((imgData: FilterImageInterface, index) => (
        <Link to={`/products/${imgData.param}`} key={`filterCard${index}`}>
          <li className=" fcc flex-col">
            <img
              className=" mx-[1.125rem] mb-1 mt-[1.5rem]"
              src={imgData.src}
              alt={`${imgData.title} 카테고리 입니다`}
            />
            <p>{imgData.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default FilterCategory;
