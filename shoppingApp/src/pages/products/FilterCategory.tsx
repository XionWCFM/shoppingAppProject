import { useParams, NavLink } from 'react-router-dom';
import { FilterImageInterface } from '../../assets/filterimage/index';

export interface FilterCategoryProps {
  filterImage: FilterImageInterface[];
}

const FilterCategory = ({ filterImage }: FilterCategoryProps) => {
  const { filterlist } = useParams();
  console.log(filterlist);
  return (
    <ul className=" flex">
      {filterImage.map((imgData: FilterImageInterface, index) => (
        <NavLink
          to={`/products/${imgData.param}`}
          key={`filterCard${index}`}
          className={({ isActive }) =>
            isActive
              ? ` text-pointbluelight underline decoration-4 underline-offset-8 `
              : ` lightmode darkmode`
          }
        >
          <li className=" fcc flex-col">
            <img
              className=" mx-[1.125rem] mb-1 mt-[1.5rem]"
              src={imgData.src}
              alt={`${imgData.title} 카테고리 입니다`}
            />
            <p>{imgData.title}</p>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default FilterCategory;
