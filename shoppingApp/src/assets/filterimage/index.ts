import allFilter from './allFilter.png';
import brandFilter from './brandFilter.png';
import categoryFilter from './categoryFilter.png';
import exhibitionFilter from './exhibitionFilter.png';
import productFilter from './productFilter.png';

export interface FilterImageInterface {
  src: string;
  title: string;
}

export const filterImage: FilterImageInterface[] = [
  {
    src: allFilter,
    title: '전체',
  },
  {
    src: brandFilter,
    title: '상품',
  },
  {
    src: categoryFilter,
    title: '카테고리',
  },
  {
    src: exhibitionFilter,
    title: '기획전',
  },
  {
    src: productFilter,
    title: '브랜드',
  },
];
